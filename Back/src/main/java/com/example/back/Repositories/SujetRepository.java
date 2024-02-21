package com.example.back.Repositories;

import com.example.back.Entities.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface SujetRepository extends JpaRepository<Sujet, Long> {
}