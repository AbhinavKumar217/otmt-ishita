package com.gl.micro.user_service.service;

import com.gl.micro.user_service.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.gl.micro.user_service.dto.CreateUserDto;
import com.gl.micro.user_service.dto.LoginUserDto;

@Service
public interface UserService extends UserDetailsService {
	UserDto createUser(CreateUserDto createUserDto);
	UserDto getUserDetails(String email);

    UserDto getUserById(String userId);
}
