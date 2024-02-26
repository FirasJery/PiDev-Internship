package com.example.back.Repositories;

import com.example.back.Entities.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SujetRepository extends JpaRepository<Sujet, Long> {
}