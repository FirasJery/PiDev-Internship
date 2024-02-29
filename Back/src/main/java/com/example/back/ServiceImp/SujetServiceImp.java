package com.example.back.ServiceImp;


import com.example.back.Entities.Sujet;
import com.example.back.Repositories.SujetRepository;
import com.example.back.Services.SujetService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class SujetServiceImp implements SujetService {

    @Autowired
    private SujetRepository sujetRepository;

    @Override
    public Sujet addSujet(Sujet sujet) {
        return sujetRepository.save(sujet);
    }

    @Override
    public Sujet updateSujet(Sujet updatedSujet, long idSujet) {
        // Retrieve the existing sujet from the repository using the provided ID
        Sujet existingSujet = sujetRepository.findById(idSujet)
                .orElseThrow(() -> new EntityNotFoundException("Sujet not found"));

        // Update only the non-null fields from the updated sujet
        if (updatedSujet.getTitre() != null) {
            existingSujet.setTitre(updatedSujet.getTitre());
        }
        if (updatedSujet.getDescription() != null) {
            existingSujet.setDescription(updatedSujet.getDescription());
        }
        if (updatedSujet.getDuree() != 0) {
            existingSujet.setDuree(updatedSujet.getDuree());
        }
        if (updatedSujet.getLieu() != null) {
            existingSujet.setLieu(updatedSujet.getLieu());
        }
        if (updatedSujet.getNbretudiant() != 0) {
            existingSujet.setNbretudiant(updatedSujet.getNbretudiant());
        }
        if (updatedSujet.getRequirements() != null) {
            existingSujet.setRequirements(updatedSujet.getRequirements());
        }
        if (updatedSujet.getTypesujet() != null) {
            existingSujet.setTypesujet(updatedSujet.getTypesujet());
        }

        // Save the updated sujet
        return sujetRepository.save(existingSujet);
    }


    @Override
    public List<Sujet> findAll() {
        return (List<Sujet>)sujetRepository.findAll();
    }

    @Override
    public Sujet findById(long idSujet) {
        // Find and return the sujet with the provided idSujet
        return sujetRepository.findById(idSujet)
                .orElseThrow(() -> new EntityNotFoundException("Sujet with id " + idSujet + " not found."));
    }

    @Override

    public List<Sujet> findAllSortedByMailentreprise() {
        return sujetRepository.findByOrderByMailentrepriseAsc(); // Corrected method name to match the repository
    }

    @Override

    public List<Sujet> findByNomentrepriseContainingIgnoreCase(String searchTerm) {
        return sujetRepository.findByNomentrepriseContainingIgnoreCaseOrderByNomentrepriseAsc(searchTerm);
    }




    @Override
    public void delete(long idSujet) {
        // Check if the idSujet is > 0)
        if (idSujet <= 0) {
            throw new IllegalArgumentException("Invalid idSujet. Please provide a positive non-zero value.");
        }

        // Check if idSujet exists in the DB
        if (!sujetRepository.existsById(idSujet)) {
            throw new EntityNotFoundException("Sujet with id " + idSujet + " not found.");
        }

        // Delete the sujet
        sujetRepository.deleteById(idSujet);
    }

}
