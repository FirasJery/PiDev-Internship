package com.example.back.Controllers;

import com.example.back.Entities.Convention;
import com.example.back.Entities.Stage;
import com.example.back.ServiceImp.StageServiceImp;
import com.example.back.Services.StageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/services/stage")
public class StageController  {

 private final StageService stageService;
    @PostMapping("/addStage")
    public Stage addStage(@RequestBody Stage stage) {
        return stageService.addStage(stage);
    }
    @DeleteMapping("/removeStage/{id}")
    public boolean removeStage(@PathVariable Long id){
        return stageService.deleteStage(id);
    }
    @GetMapping("/getStage/{id}")
    public Stage getStage(@PathVariable Long id){
        return stageService.findById(id);
    }
    @GetMapping("/getStages")
    public List<Stage> getConventions(){
        return stageService.findAll();
    }
    @PutMapping("/updateStage")
    public Stage updateStage(@RequestBody Stage stage){
        stageService.updateStage(stage);
        return stage;
    }
}


