package com.otmt.otmt_backend.controller;

import com.otmt.otmt_backend.dto.TechDto;
import com.otmt.otmt_backend.dto.TechRequestDto;
import com.otmt.otmt_backend.service.TechService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tech")
public class TechController {
    @Autowired
    private TechService techService;
    @PostMapping
    public ResponseEntity<TechDto> addTech(@RequestBody @Valid TechRequestDto techRequestDto) {
        TechDto techResponseDto = techService.addTech(techRequestDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(techResponseDto);
    }
    @GetMapping
    public ResponseEntity<List<TechDto>> getAllTech() {
        List<TechDto> techList =techService.getAllTech();
        return ResponseEntity.status(HttpStatus.OK).body(techList);

    }
    @PutMapping("/{objectId}")
    public ResponseEntity<TechDto> updateTech(@RequestBody @Valid TechRequestDto techRequestDto, @PathVariable String objectId) {
        TechDto updatedTech =techService.updateTech(techRequestDto, objectId);
        return ResponseEntity.status(HttpStatus.OK).body(updatedTech);
    }
    @DeleteMapping("/{objectId}")
    public ResponseEntity<String> deleteTech(@PathVariable String objectId) {
        techService.deleteTech(objectId);
        return ResponseEntity.status(HttpStatus.OK).body("Tech with ID: " + objectId + " was deleted.");
    }



}
