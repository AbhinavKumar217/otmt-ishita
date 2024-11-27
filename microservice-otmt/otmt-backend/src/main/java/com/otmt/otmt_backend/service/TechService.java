package com.otmt.otmt_backend.service;

import com.otmt.otmt_backend.dto.TechDto;
import com.otmt.otmt_backend.dto.TechRequestDto;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface TechService {
    TechDto addTech(TechRequestDto techRequestDto);

    List<TechDto> getAllTech();

    TechDto updateTech( TechRequestDto techRequestDto, String objectId);

    void deleteTech(String objectId);
}
