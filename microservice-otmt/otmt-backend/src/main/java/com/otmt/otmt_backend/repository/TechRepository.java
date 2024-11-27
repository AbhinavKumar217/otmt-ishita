package com.otmt.otmt_backend.repository;

import com.otmt.otmt_backend.entity.TechEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechRepository extends MongoRepository<TechEntity, String> {
}
