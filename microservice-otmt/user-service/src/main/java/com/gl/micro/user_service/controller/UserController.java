package com.gl.micro.user_service.controller;

import com.gl.micro.user_service.dto.CreateUserDto;
import com.gl.micro.user_service.dto.UserDto;
import com.gl.micro.user_service.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private Environment environment;
    @PostMapping()
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserDto createUserDto) {
        UserDto userResponseDto = userService.createUser(createUserDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(userResponseDto);
    }

    @GetMapping("/status/check")
    public ResponseEntity<String> checkServiceStatus() {
        return ResponseEntity.status(HttpStatus.OK).body("Working on port : " + environment.getProperty("local.server.port"));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUser(@PathVariable String userId) {
        UserDto response = userService.getUserById(userId);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
