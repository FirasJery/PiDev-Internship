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
    public Sujet addSujet(@RequestBody Sujet sujet) {
        return sujetService.addSujet(sujet);
    }


    @PutMapping("/update/{id}")
    public Sujet updateSujet(@PathVariable long id, @RequestBody Sujet updatedSujet) {
        return sujetService.updateSujet(id, updatedSujet);
    }



    @GetMapping
    public List<Sujet> findAll() {
        return sujetService.findAllSortedByMailentreprise();
    }

    @GetMapping("/search")
    public List<Sujet> searchSujets(@RequestParam String searchTerm) {
        return sujetService.findByNomentrepriseContainingIgnoreCase(searchTerm);
    }

    @GetMapping("/{idSujet}")
    public Sujet getById(@PathVariable long idSujet){
        return sujetService.findById(idSujet);
    }

    @DeleteMapping("/{idSujet}")
    public void delete(@PathVariable long idSujet) {
        sujetService.delete(idSujet);
    }


    }



