package com.example.back.Services;

import com.example.back.Entities.Sujet;

import java.util.List;

public interface SujetService {
    Sujet addSujet(Sujet sujet);
    Sujet updateSujet(Sujet updatedSujet, long idSujet)    ;
    List<Sujet> findAll();
    Sujet findById (long idSujet);
    List<Sujet> findAllSortedByMailentreprise();
    List<Sujet> searchSujets(String searchTerm);
    void delete (long idSujet);

     List<Sujet> findByNbretudiantOrderByNbretudiantDesc() ;
     List<Sujet> findByNbretudiantOrderByNbretudiantAsc();

     List<Sujet> findByDureeOrderByDureeDesc() ;
    List<Sujet> findByDureeOrderByDureeAsc() ;

}