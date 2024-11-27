package com.otmt.otmt_backend.service.impl;

import com.otmt.otmt_backend.dto.TechDto;
import com.otmt.otmt_backend.dto.TechRequestDto;
import com.otmt.otmt_backend.entity.TechEntity;
import com.otmt.otmt_backend.repository.TechRepository;
import com.otmt.otmt_backend.service.TechService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TechServiceImpl implements TechService {
    @Autowired
    private TechRepository techRepository;
    private final ModelMapper modelMapper = new ModelMapper();


    @Override
    public TechDto addTech(TechRequestDto techRequestDto) {
        TechEntity techEntity = TechEntity.builder()
                .id(techRequestDto.getId())
                .name(techRequestDto.getName())
                .detail(techRequestDto.getDetail())
                .trl(techRequestDto.getTrl())
                .sector(techRequestDto.getSector())
                .tech(techRequestDto.getTech())
                .link(techRequestDto.getLink())
                .build();
        techRepository.save(techEntity);
        return modelMapper.map(techEntity, TechDto.class);
    }

    @Override
    public List<TechDto> getAllTech() {
         return techRepository.findAll().stream().map(x -> modelMapper.map(x, TechDto.class)).collect(Collectors.toList());
    }

    @Override
    public TechDto updateTech(TechRequestDto techRequestDto, String objectId) {
        TechEntity techEntity = techRepository.findById(objectId).orElseThrow();
        techEntity.setName(techRequestDto.getName());
        techEntity.setDetail(techRequestDto.getDetail());
        techEntity.setTech(techRequestDto.getTech());
        techEntity.setLink(techRequestDto.getLink());
        techEntity.setSector(techRequestDto.getSector());
        techEntity.setTrl(techRequestDto.getTrl());
        techRepository.save(techEntity);

        return modelMapper.map(techEntity, TechDto.class);
    }

    @Override
    public void deleteTech(String objectId) {
        TechEntity techEntity = techRepository.findById(objectId).orElseThrow();
        techRepository.delete(techEntity);

    }
}
