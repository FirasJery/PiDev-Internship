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
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/services/postulation")
@CrossOrigin(origins = "http://localhost:4200")
public class PostulationController {

    private final SujetRepository sujetRepository;
    private final PostulationRepository postulationRepository;
    private final SujetService sujetService ;
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


    @GetMapping("/byAccepted")
    public List<Postulation> filterByAccepted() {
        List<Postulation> acceptedPostulations = postulationService.getPostulationsByStatus(1);
        return acceptedPostulations;
    }

    @GetMapping("/byRefused")
    public List<Postulation> filterByRefused() {
        List<Postulation> refusedPostulations = postulationService.getPostulationsByStatus(2);
        return refusedPostulations;
    }

    @GetMapping("/byAttente")
    public List<Postulation> filterByAttente() {
        List<Postulation> waitingPostulations = postulationService.getPostulationsByStatus(0);
        return waitingPostulations;
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



    @GetMapping("/sujet/{id}")
    public Sujet getSujetById(@PathVariable("id") Long sujetId) {
        Sujet sujet = sujetService.findById(sujetId);
        if (sujet != null) {
            return sujet;
        } else {
            return null;
        }
    }
}
