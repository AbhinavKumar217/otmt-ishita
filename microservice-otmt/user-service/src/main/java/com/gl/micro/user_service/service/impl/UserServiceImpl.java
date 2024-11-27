package com.gl.micro.user_service.service.impl;


import com.gl.micro.user_service.dto.UserDto;
import com.gl.micro.user_service.entity.UserEntity;
import com.gl.micro.user_service.exception.ResourceNotFoundException;
import com.gl.micro.user_service.exception.UserServiceApiException;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.gl.micro.user_service.dto.CreateUserDto;
import com.gl.micro.user_service.repository.UserRepository;
import com.gl.micro.user_service.service.UserService;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private Environment env;

	@Override
	public UserDto createUser(CreateUserDto createUserDto) {
		Optional<UserEntity> existingUser = Optional.ofNullable(userRepository.findByEmail(createUserDto.getEmail()));
		if(existingUser.isPresent()) {
			if(createUserDto.getEmail().equals(existingUser.get().getEmail())) throw new UserServiceApiException(HttpStatus.BAD_REQUEST, "User with given email already exists. Please login.");
		}
		if(!createUserDto.getPassword().equals(createUserDto.getConfirmPassword())) throw new UserServiceApiException(HttpStatus.BAD_REQUEST, "Password should match with confirm password.");
		UserEntity userEntity = UserEntity.builder()
				.userId(UUID.randomUUID().toString())
				.name(createUserDto.getName())
				.email(createUserDto.getEmail())
				.encodedPassword(bCryptPasswordEncoder.encode(createUserDto.getConfirmPassword()))
				.build();
		userRepository.save(userEntity);
		log.info("Working on port : " + env.getProperty("local.server.port"));
		return UserDto.builder()
				.userId(userEntity.getUserId())
				.name(userEntity.getName())
				.email(userEntity.getEmail())
				.build();
	}

	@Override
	public UserDto getUserDetails(String email) {
		UserEntity userEntity = userRepository.findByEmail(email);
		if (userEntity == null) throw new ResourceNotFoundException("User", "username", email);
		return new ModelMapper().map(userEntity, UserDto.class);
	}

	@Override
	public UserDto getUserById(String userId) {
		UserEntity userEntity = userRepository.findByUserId(userId);
		if (userEntity == null) throw new ResourceNotFoundException("User", "id", userId);
		return new ModelMapper().map(userEntity, UserDto.class);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity userEntity = userRepository.findByEmail(username);
		if (userEntity == null) throw new ResourceNotFoundException("User", "username", username);
		return new User(userEntity.getEmail(), userEntity.getEncodedPassword(), true, true, true, true, new ArrayList<>());
	}
}
