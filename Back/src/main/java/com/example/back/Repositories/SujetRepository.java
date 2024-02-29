package com.example.back.Repositories;

import com.example.back.Entities.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SujetRepository extends JpaRepository<Sujet, Long> {

    List<Sujet> findByOrderByMailentrepriseAsc();
    List<Sujet> findByNomentrepriseContainingIgnoreCaseOrderByNomentrepriseAsc(String searchTerm);

}