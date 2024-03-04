package com.example.back.Services;

import com.example.back.Entities.Postulation;
import com.example.back.Entities.Sujet;

import java.util.List;

public interface PostulationService {
    Postulation addPostulation(Postulation postulation);
    Postulation updatePostulation(Postulation updatedPostulation, long idP)    ;
    List<Postulation> findAll();
    Postulation findById (long idP);
     void delete (long idP);
}
