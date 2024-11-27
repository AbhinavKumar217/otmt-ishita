package com.otmt.otmt_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class TechDto {
    private String objectId;
    private Long id;
    private String name;
    private String detail;
    private Long trl;
    private String sector;
    private String tech;
    private String link;
}
