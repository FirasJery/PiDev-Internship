package com.example.back.Controllers;

import com.example.back.Entities.EmailRequest;
import com.example.back.Entities.Postulation;
import com.example.back.Entities.Sujet;
import com.example.internship_management.Entities.Enums.Role_user;
import com.example.back.Entities.User;
import com.example.back.Repositories.PostulationRepository;
import com.example.back.Repositories.SujetRepository;
import com.example.back.Repositories.UserRepository;
import com.example.back.ServiceImp.EmailServiceImp;
import com.example.back.Services.PostulationService;
import com.example.back.Services.SujetService;
import com.example.back.Services.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date; // Import Date class
import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/services/postulation")
@CrossOrigin(origins = "http://localhost:4200")
public class PostulationController {

    private final SujetRepository sujetRepository;
    private final PostulationRepository postulationRepository;
    private final UserRepository userRepository;

    private final SujetService sujetService;
    private final PostulationService postulationService;

    @Autowired
    private EmailServiceImp emailService;
    private final UserService userService;

    @PostMapping("/send-email")
    public void sendEmail(@RequestBody EmailRequest emailRequest) {
        emailService.sendSimpleEmail(emailRequest.getToEmail(), emailRequest.getSubject(), emailRequest.getBody());
    }

    @PostMapping("/add")
    public Postulation addPostulation(@RequestParam Long sujetId, @RequestParam Long userId, @RequestBody Postulation postulation) {
        // Gérer l'erreur si l'ID du sujet est manquant
        if (sujetId == null) {
            throw new IllegalArgumentException("sujetId manquant");
        }

        // Gérer l'erreur si l'ID de l'utilisateur est manquant
        if (userId == null) {
            throw new IllegalArgumentException("userId manquant");
        }

        // Récupérer l'utilisateur correspondant à partir de l'ID de l'utilisateur
        User user = userRepository.findById(userId).orElse(null);

        // Récupérer le sujet correspondant à partir de l'ID du sujet
        Sujet sujet = sujetRepository.findById(sujetId).orElse(null);

        // Gérer l'erreur si le sujet n'est pas trouvé
        if (sujet == null) {
            throw new IllegalArgumentException("Sujet non trouvé");
        }

        // Définir le statut par défaut à 0 s'il n'est pas fourni dans le corps de la requête
        if (postulation.getStatus() == 0) {
            postulation.setStatus(0);
        }

        // Récupérer le type de stage pour le sujet
        String typeSujet = sujet.getTypesujet().toString();

        // Vérifier la période selon le type de stage
        int minimumDurationInDays = 0;
        if ("STAGE_FORMATION_HUMAINE_SOCIALE".equals(typeSujet)) {
            minimumDurationInDays = 30;
        } else if ("STAGE_IMMERSION_ENTREPRISE".equals(typeSujet)) {
            minimumDurationInDays = 45;
        } else if ("STAGE_INGENIEUR".equals(typeSujet)) {
            minimumDurationInDays = 60;
        }

        // Valider la période
        if (!isValidPeriod(postulation.getDatedeb(), postulation.getDatefin(), minimumDurationInDays)) {
            throw new IllegalArgumentException("Période invalide"); // Gérer l'erreur si la période n'est pas valide
        }

        // Définir le sujet et l'utilisateur pour la postulation
        postulation.setSujet(sujet);
        postulation.setUser(user);

        // Enregistrer la postulation dans la base de données et la renvoyer
        return postulationRepository.save(postulation);
    }



    //milliseconds to days.
    //(1000 milliseconds * 60 seconds * 60 minutes * 24 hours).
   private boolean isValidPeriod(Date dateDebut, Date dateFin, int minimumDurationInDays) {
        long differenceInTime = dateFin.getTime() - dateDebut.getTime();
        long differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return differenceInDays >= minimumDurationInDays;
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


    @GetMapping("/typesujet/{id}")
    public String getSujetTypeById(@PathVariable("id") Long sujetId) {
        Sujet sujet = sujetService.findById(sujetId);
        if (sujet != null) {
            return sujet.getTypesujet().toString();
        } else {
            return null;
        }
    }

    @GetMapping("/attente/{idadmin}")
    public List<Postulation> getPostulationsAttente(@PathVariable Long idadmin) {
        User user = userService.findById(idadmin);

        if (user != null) {
            if (user.getRoleUser() == Role_user.SUPER_ADMIN || user.getRoleUser() == Role_user.AGENT_STAGE) {
                return postulationService.getPostulationsByStatus(0);
            } else if (user.getRoleUser() == Role_user.AGENT_ENTREPRISE) {
                return postulationService.getPostulationsByStatusAndUserId(0, idadmin);
            }
        }

        return new ArrayList<>();

    }





    @GetMapping("/byIdSujetAndAttente/{sujetId}")
    public List<Postulation> getPostulationsByIdSujetAndAttente(@PathVariable Long sujetId) {
        return postulationService.getPostulationsBySujetIdAndAttente(sujetId);
    }



    @PutMapping("/confirm-postulation/{idP}/{idadmin}")
    public Postulation confirmPostulation(@PathVariable long idP , @PathVariable Long idadmin) {
        Postulation postulation = postulationService.findById(idP);
        Role_user role = postulationRepository.findUserRoleByAdminId(idadmin);

        if (postulation != null) {
            if (role == Role_user.AGENT_ENTREPRISE) {
                postulation.setStatusentr(1);
                postulationService.updatePostulation(postulation, idP);
            } else if (role == Role_user.SUPER_ADMIN || role == Role_user.AGENT_STAGE) {
                postulation.setStatus(1);
                postulationService.updatePostulation(postulation, idP);

            }
            if (postulation.getStatusentr() == 1 && postulation.getStatus() == 1) {
                postulationService.updatePostulation(postulation, idP);
                // Send confirmation email to the student
                sendConfirmationEmail(postulation);

            }
        } else {
            throw new EntityNotFoundException("Postulation with id " + idP + " not found.");
        }
        return postulation;
    }


    @PutMapping("/reject-postulation/{idP}/{idadmin}")
    public Postulation rejectPostulation(@PathVariable long idP, @PathVariable Long idadmin) {

        User user = userService.findById(idadmin);
        Postulation postulation = postulationService.findById(idP);
        Role_user role = postulationRepository.findUserRoleByAdminId(idadmin);

        if (postulation != null) {
            if (role == Role_user.AGENT_ENTREPRISE) {
                postulation.setStatusentr(2);
                postulationService.updatePostulation(postulation, idP);

            } else if (role == Role_user.SUPER_ADMIN || role == Role_user.AGENT_STAGE) {
                postulation.setStatus(2);
                postulationService.updatePostulation(postulation, idP);


            }
            if (postulation.getStatusentr() == 2 && postulation.getStatus() == 2) {
                postulationService.updatePostulation(postulation, idP);
                // Send rejection email to the student
                sendRejectionEmail(postulation);

            }
        } else {
            throw new EntityNotFoundException("Postulation with id " + idP + " not found.");
        }
        return postulation;

    }

    private void sendConfirmationEmail(Postulation postulation) {
        String toEmail = postulation.getUser().getEmail();
        String subject = "Confirmation of your internship application";
        String body = "Hello " + postulation.getUser().getNom() + " " + postulation.getUser().getPrenom() +
                ", your internship application for the company " + postulation.getSujet().getNomentreprise() +
                " has been accepted.";
        emailService.sendSimpleEmail(toEmail, subject, body);
    }

    private void sendRejectionEmail(Postulation postulation) {
        String toEmail = postulation.getUser().getEmail();
        String subject = "Rejection of your internship application";
        String body = "Hello " + postulation.getUser().getNom() + " " + postulation.getUser().getPrenom() +
                ", your internship application for the company " + postulation.getSujet().getNomentreprise() +
                " has been rejected.";
        emailService.sendSimpleEmail(toEmail, subject, body);
    }



}
