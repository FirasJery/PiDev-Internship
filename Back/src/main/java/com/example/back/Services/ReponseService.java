package com.example.back.Services;

import com.example.back.Entities.Reponse;

import java.util.List;

public interface ReponseService {
    Reponse addReponse (Reponse reponse);
    Reponse updateReponse (Reponse reponse);
    List<Reponse> findAll();
    Reponse findById (long id_reponse);
    void delete (long id_reponse);
 }
