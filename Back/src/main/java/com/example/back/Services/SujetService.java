package com.example.back.Services;

import com.example.back.Entities.Sujet;

import java.util.List;

public interface SujetService {
    Sujet addSujet(Sujet sujet);
    Sujet updateSujet(Sujet updatedSujet, long idSujet)    ;
    List<Sujet> findAll();
    Sujet findById (long idSujet);
    List<Sujet> findAllSortedByMailentreprise();
    List<Sujet> findByNomentrepriseContainingIgnoreCase(String searchTerm);
    void delete (long idSujet);



}