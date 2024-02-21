package com.example.back.Services;

import com.example.back.Entities.Sujet;

import java.util.List;

public interface SujetService {
    Sujet addSujet(Sujet sujet);
    Sujet updateSujet(Sujet sujet);
    List<Sujet> findAll();
    Sujet findById (long idSujet);
    void delete (long idSujet);



}
