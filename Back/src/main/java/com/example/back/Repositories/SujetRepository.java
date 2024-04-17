package com.example.back.Repositories;

import com.example.back.Entities.Sujet;
import com.example.back.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SujetRepository extends JpaRepository<Sujet, Long> {

    List<Sujet> findByOrderByMailentrepriseAsc();

    List<Sujet> findByNomentrepriseContainingIgnoreCase(String searchTerm);

    List<Sujet> findByNomentrepriseContainingIgnoreCaseOrRequirementsContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String nomentrepriseSearchTerm, String requirementsSearchTerm, String descriptionSearchTerm);



    List<Sujet>findByOrderByNbretudiantDesc();
    List<Sujet>findByOrderByNbretudiantAsc();
    List<Sujet>findByOrderByDureeDesc();
    List<Sujet>findByOrderByDureeAsc();

    List<Sujet> findAllByUser(User user);

}