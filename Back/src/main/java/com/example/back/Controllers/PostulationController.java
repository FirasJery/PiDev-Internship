package com.example.back.Controllers;

import com.example.back.Entities.Postulation;
import com.example.back.Entities.Sujet;
import com.example.back.Repositories.PostulationRepository;
import com.example.back.Repositories.SujetRepository;
import com.example.back.Services.PostulationService;
import com.example.back.Services.SujetService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.Date; // Import Date class
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/services/postulation")
@CrossOrigin(origins = "http://localhost:4200")
public class PostulationController {

    private final SujetRepository sujetRepository;
    private final PostulationRepository postulationRepository;
    private final SujetService sujetService;
    private final PostulationService postulationService;

    @PostMapping("/add")
    public Postulation addPostulation(@RequestParam Long sujetId, @RequestBody Postulation postulation) {
        if (sujetId == null) {
            throw new IllegalArgumentException("sujetId is missing"); // Handle error if sujetId is missing
        }

        Sujet sujet = sujetRepository.findById(sujetId).orElse(null);
        if (sujet == null) {
            throw new IllegalArgumentException("Sujet not found"); // Handle error if sujet is not found
        }

        // Set the default status to 0 if not provided in the request body
        if (postulation.getStatus() == 0) {
            postulation.setStatus(0);
        }

        // Retrieve the type of internship for the subject
        String typeSujet = sujet.getTypesujet().toString();

        // Check the period according to the type of internship
        int minimumDurationInDays = 0;
        if ("STAGE_FORMATION_HUMAINE_SOCIALE".equals(typeSujet)) {
            minimumDurationInDays = 30;
        } else if ("STAGE_IMMERSION_ENTREPRISE".equals(typeSujet)) {
            minimumDurationInDays = 45;
        } else if ("STAGE_INGENIEUR".equals(typeSujet)) {
            minimumDurationInDays = 60;
        }

        // Validate the period
        if (!isValidPeriod(postulation.getDatedeb(), postulation.getDatefin(), minimumDurationInDays)) {
            throw new IllegalArgumentException("Invalid period"); // Handle error if the period is not valid
        }

        postulation.setSujet(sujet);
        return postulationRepository.save(postulation);
    }



    // Method to check if the period is valid based on the specified duration
    private boolean isValidPeriod(Date dateDebut, Date dateFin, int minimumDurationInDays) {
        long differenceInTime = dateFin.getTime() - dateDebut.getTime();
        long differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return differenceInDays >= minimumDurationInDays;
    }

    // Other methods...





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


    @GetMapping("/typesujet/{id}")
    public String getSujetTypeById(@PathVariable("id") Long sujetId) {
        Sujet sujet = sujetService.findById(sujetId);
        if (sujet != null) {
            return sujet.getTypesujet().toString();
        } else {
            return null;
        }
    }


    @PutMapping("/confirm-postulation/{idP}")
    public Postulation confirmPostulation(@PathVariable long idP) {
        Postulation postulation = postulationService.findById(idP);
        if (postulation != null) {
            postulation.setStatus(1);
            return postulationService.updatePostulation(postulation, idP);
        } else {
            throw new EntityNotFoundException("Postulation with id " + idP + " not found.");
        }
    }

    @PutMapping("/reject-postulation/{idP}")
    public Postulation rejectPostulation(@PathVariable long idP) {
        Postulation postulation = postulationService.findById(idP);
        if (postulation != null) {
            postulation.setStatus(2);
            return postulationService.updatePostulation(postulation, idP);
        } else {
            throw new EntityNotFoundException("Postulation with id " + idP + " not found.");
        }
    }

    @GetMapping("/attente")
    public List<Postulation> getPostulationsAttente() {
        return postulationService.getPostulationsByStatus(0);
    }
    @GetMapping("/byIdSujetAndAttente/{sujetId}")
    public List<Postulation> getPostulationsByIdSujetAndAttente(@PathVariable Long sujetId) {
        return postulationService.getPostulationsBySujetIdAndAttente(sujetId);
    }


}
