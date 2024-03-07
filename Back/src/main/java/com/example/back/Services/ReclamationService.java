package com.example.back.Services;

import com.example.back.Entities.Reclamation;

import java.util.List;

public interface ReclamationService {
    Reclamation addReclamation (Reclamation reclamation);
    Reclamation updateReclamation(long id_Reclamation, Reclamation updatedReclamation);
    List<Reclamation> findAll();
    Reclamation findById (long id_reclamation);
    void delete (long id_reclamation);
//    void updateReclamationStatus(long id_Reclamation, com.example.internship_management.Entities.Enums.Statut_reclamation newStatus);

}
