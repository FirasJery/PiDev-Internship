package com.example.back.Repositories;

import com.example.back.Entities.Postulation;
import com.example.back.Entities.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostulationRepository extends JpaRepository<Postulation, Long> {


    List<Postulation> findByStatus(int status);



}
