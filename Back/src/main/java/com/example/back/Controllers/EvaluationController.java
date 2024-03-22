package com.example.back.Controllers;

import com.example.back.Entities.Evaluation;
import com.example.back.Services.EvaluationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/services/evaluation")
@CrossOrigin(origins = "http://localhost:4200")



public class EvaluationController {

    public final EvaluationService evaluationService;

    @PostMapping("/{id_Journal}")
    public Set<Evaluation> addEvaluationAndAssignToJournal(@PathVariable long id_Journal) {

      return evaluationService.addEvaluationAndAssignToJournal(id_Journal);}



   @GetMapping("/GetEvaluationsbyJournal/{id_Journal}")
    public List<Evaluation> findAllEvaluationsByIdJournal(@PathVariable Long id_Journal) {

    return  evaluationService.findAllEvaluationsByIdJournal(id_Journal);
    }


    @GetMapping
    public List<Evaluation> findAll() {
        return evaluationService.findAll();
    }

    @GetMapping("/{idEvaluation}")
    public Evaluation findEvaluationById(@PathVariable Long idEvaluation) {
        return evaluationService.findEvaluationById(idEvaluation);
    }



    @PutMapping("/updatEvaluation/{idEvaluation}")
    public Evaluation updateEvaluation(@PathVariable Long idEvaluation,@RequestBody Evaluation updtevaluation) {
        return evaluationService.updateEvaluation(idEvaluation, updtevaluation);
    }







}