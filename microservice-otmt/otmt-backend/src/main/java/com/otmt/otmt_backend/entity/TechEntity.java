package com.otmt.otmt_backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Document(collection = "technologies")
public class TechEntity {
    @MongoId(FieldType.OBJECT_ID)
    private String objectId;
    @Indexed(unique = true)
    private Long id;
    private String name;
    private String detail;
    private Long trl;
    private String sector;
    private String tech;
    private String link;



}
