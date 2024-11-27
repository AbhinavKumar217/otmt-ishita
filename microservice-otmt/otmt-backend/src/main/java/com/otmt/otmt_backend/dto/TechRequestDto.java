package com.otmt.otmt_backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TechRequestDto {
    @NotNull
    private Long id;
    @Size(min = 1, max = 255, message = "name should not exceed more than 255 characters")
    @NotBlank(message = "name should not be blank")
    private String name;
    private String detail;
    private Long trl;
    private String sector;
    private String tech;
    private String link;
}
