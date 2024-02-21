package com.example.back.Services;

import com.example.back.Entities.Convention;
import com.example.back.Entities.Stage;

import java.util.List;

public interface StageService {
    Stage addStage(Stage stage);
    Stage updateStage(Stage stage);
    List<Stage> findAll();
    Stage findById(Long id);
    boolean deleteStage(Long id);
}
