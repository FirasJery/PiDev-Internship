package com.example.back.Controllers;

import com.example.back.Entities.Commentaire;
import com.example.back.Entities.Post;
import com.example.back.ServiceImp.CommentaireServiceImp;
import com.example.back.Services.CommentaireService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/services/commentaire")
@CrossOrigin(origins = "http://localhost:4200")

public class CommentaireController {
    private final CommentaireService commentaireService;
    @GetMapping("/getcmtparid/{idcommentaire}")
    public Commentaire getCommentaireById(@PathVariable(value = "idcommentaire") Long idCommentaire) {
        Commentaire commentaire= commentaireService.getCommentaireById(idCommentaire);
        return commentaire;
    }
    @GetMapping("/getallCommentaire")
    public List<Commentaire> getAllCommentaires() {
        return commentaireService.getAllCommentaires();
    }
    @PutMapping("/updateCommentaire")
    public Commentaire updateCommentaire(@RequestBody Commentaire commentaire) {
        return  commentaireService.updateCommentaire(commentaire);
    }
    @DeleteMapping("/deletecmt/{idCommentaire}")
    public boolean deleteCommentaire(@PathVariable Long idCommentaire) {
        return commentaireService.deleteCommentaire(idCommentaire);

    }
    @GetMapping("/getcmtparpost/{idPost}")
    public List<Commentaire> getCommentsByPostId(@PathVariable Long idPost) {
        return commentaireService.getCommentsByPostId(idPost);
    }

    @PostMapping("/addCommentToPost/{postId}")
    public Commentaire addCommentToPost(@RequestBody Commentaire commentaire, @PathVariable Long postId) {
        return commentaireService.createCommentaireWithPost(commentaire, postId);
    }

}
