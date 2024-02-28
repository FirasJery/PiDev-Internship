package com.example.back.Repositories;

import com.example.back.Entities.Convention;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConventionRepository extends JpaRepository<Convention, Long> {
}