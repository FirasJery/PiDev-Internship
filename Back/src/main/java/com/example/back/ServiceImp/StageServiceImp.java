package com.example.back.ServiceImp;

import com.example.back.Entities.Stage;
import com.example.back.Repositories.StageRepository;
import com.example.back.Services.StageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
@Slf4j
public class StageServiceImp implements StageService {
    private final StageRepository stageRepository;
    @Override
    public Stage addStage(Stage stage) {
        return stageRepository.save(stage);
    }

    @Override
    public Stage updateStage(Stage stage) {
        stageRepository.save(stage);
        return stage;
    }

    @Override
    public List<Stage> findAll() {
        return stageRepository.findAll();
    }

    @Override
    public Stage findById(Long id) {
        return stageRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Stage with ID: " + id+" not found"));
    }

    @Override
    public boolean deleteStage(Long id) {
        stageRepository.deleteById(id);
        log.info("Convention with ID: " + id+" is deleted");
        return false;
    }
}
