package com.example.back.Controllers;

import com.example.back.Entities.Sujet;
import com.example.back.Services.SujetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/services/sujet")
@CrossOrigin(origins = "http://localhost:4200")
public class SujetController {



    private final SujetService sujetService;

    @PostMapping("/add")
    public Sujet addSujet(@RequestBody Sujet sujet ) {
        return sujetService.addSujet(sujet);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/{idSujet}")
    public Sujet updateSujet(@RequestBody Sujet sujet, @PathVariable long idSujet) {
        return sujetService.updateSujet(sujet, idSujet);
    }


    @GetMapping
    public List<Sujet> findAll() {
        return sujetService.findAllSortedByMailentreprise();
    }

    @GetMapping("/search")
    public List<Sujet> searchSujets(@RequestParam String searchTerm) {
        return sujetService.searchSujets(searchTerm);
    }



    @GetMapping("/{idSujet}")
    public Sujet getById(@PathVariable long idSujet){
        return sujetService.findById(idSujet);
    }

    @DeleteMapping("/{idSujet}")
    public void delete(@PathVariable long idSujet) {
        sujetService.delete(idSujet);
    }


    @GetMapping("/filter/byNbretudiantDesc")
    public List<Sujet> filterByNbretudiantDescending() {
        return sujetService.findByNbretudiantOrderByNbretudiantDesc();
    }
    @GetMapping("/filter/byNbreEtudiantAsc")
    public List<Sujet> filterByNbretudiantAscending() {
        return sujetService.findByNbretudiantOrderByNbretudiantAsc();
    }

    @GetMapping("/filter/byDureeDesc")
    public List<Sujet> filterByDureeDescending() {
        return sujetService.findByDureeOrderByDureeDesc();
    }

    @GetMapping("/filter/byDureeAsc")
    public List<Sujet> filterByDureeAscending() {
        return sujetService.findByDureeOrderByDureeAsc();
    }



}
