package com.example.back.Controllers;

import com.example.back.Entities.Postulation;
import com.example.back.Entities.Sujet;
import com.example.back.Repositories.PostulationRepository;
import com.example.back.Repositories.SujetRepository;
import com.example.back.Services.PostulationService;
import com.example.back.Services.SujetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/services/postulation")
@CrossOrigin(origins = "http://localhost:4200")
public class PostulationController {

    private final SujetRepository sujetRepository;
    private final PostulationRepository postulationRepository;

    private final PostulationService postulationService;

    @PostMapping("/add")
    public ResponseEntity<Postulation> addPostulation(@RequestParam Long sujetId, @RequestBody Postulation postulation) {
        if (sujetId == null) {
            return ResponseEntity.badRequest().body(null); // Handle error if sujetId is missing
        }

        Sujet sujet = sujetRepository.findById(sujetId).orElse(null);
        if (sujet == null) {
            return ResponseEntity.notFound().build(); // Handle error if sujet is not found
        }

        postulation.setSujet(sujet);
        Postulation savedPostulation = postulationRepository.save(postulation);
        return ResponseEntity.ok(savedPostulation);
    }



    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/{idP}")
    public Postulation updatePostulation(@RequestBody Postulation postulation, @PathVariable long idP) {
        return postulationService.updatePostulation(postulation, idP);
    }


    @GetMapping
    public List<Postulation> findAll() {
        return postulationService.findAll();
    }


    @GetMapping("/{idP}")
    public Postulation getById(@PathVariable long idP){
        return postulationService.findById(idP);
    }

    @DeleteMapping("/{idP}")
    public void delete(@PathVariable long idP) {
        postulationService.delete(idP);
    }





}
