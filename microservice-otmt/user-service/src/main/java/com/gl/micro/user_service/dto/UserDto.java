package com.gl.micro.user_service.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
    private String userId;
    @NotBlank(message="Name is required.")
    @Size(min=5, max=30, message="Name should be more than 5 characters and must not exceed 30 characters.")
    private String name;
    @Email
    @NotBlank(message="Email is required.")
    private String email;
}
