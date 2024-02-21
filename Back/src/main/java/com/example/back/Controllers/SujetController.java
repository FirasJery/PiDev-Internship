package com.example.back.Controllers;

import com.example.back.Entities.Sujet;
import com.example.back.Repositories.SujetRepository;
import com.example.back.Services.SujetService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/services/sujet")
public class SujetController {

    private final SujetService sujetService;

    @PostMapping("/add")
    public Sujet addSujet(@RequestBody Sujet sujet) {
        return sujetService.addSujet(sujet);
    }

    @PutMapping
    public Sujet updateSujet (@RequestBody  Sujet sujet){
        return sujetService.updateSujet(sujet);
    }



    @GetMapping
    public List<Sujet> findAll() {

        return sujetService.findAll();
    }

    @GetMapping("/{idSujet}")
    public Sujet getById(@PathVariable long idSujet){

        return sujetService. findById(idSujet);
    }



    @DeleteMapping("/{idSujet}")
    public void delete(@PathVariable long idSujet) {
        sujetService.delete(idSujet);
    }





}
