package com.example.back.Repositories;

import com.example.back.Entities.Postulation;
import com.example.back.Entities.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostulationRepository extends JpaRepository<Postulation, Long> {


    List<Postulation> findByStatus(int status);

    List<Postulation> getPostulationsByStatus(int status);


    @Query("SELECT p FROM Postulation p WHERE p.sujet.idsujet = :sujetId AND p.status = :status")
    List<Postulation> findBySujetIdAndStatus(@Param("sujetId") Long sujetId, @Param("status") int status);}
