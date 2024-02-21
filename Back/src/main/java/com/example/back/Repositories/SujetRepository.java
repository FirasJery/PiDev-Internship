package com.example.back.Repositories;

import com.example.back.Entities.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface SujetRepository extends JpaRepository<Sujet, Long> {

    List<Sujet> findByOrderByMailentrepriseAsc();
    List<Sujet> findByNomentrepriseContainingIgnoreCaseOrderByNomentrepriseAsc(String searchTerm);
}


