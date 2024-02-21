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
public class CommentaireController {
    private final CommentaireService commentaireService;
@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id_commentaire}")
    public Commentaire getCommentaireById(@PathVariable(value = "id_commentaire") Long id_Commentaire) {
       Commentaire commentaire= commentaireService.getCommentaireById(id_Commentaire);
        return commentaire;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/allCommentaire")
    public List<Commentaire> getAllCommentaires() {
        return commentaireService.getAllCommentaires();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/updateCommentaire")
    public Commentaire updateCommentaire(@RequestBody Commentaire commentaire) {
        return  commentaireService.updateCommentaire(commentaire);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/{id_Commentaire}")
    public boolean deleteCommentaire(@PathVariable Long id_Commentaire) {
        return commentaireService.deleteCommentaire(id_Commentaire);

    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/post/{id_Post}")
    public List<Commentaire> getCommentsByPostId(@PathVariable Long id_Post) {
        return commentaireService.getCommentsByPostId(id_Post);
    }

}

