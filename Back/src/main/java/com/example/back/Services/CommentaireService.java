package com.example.back.Services;

import com.example.back.Entities.Commentaire;
import com.example.back.Entities.Post;

import java.util.List;

public interface CommentaireService {
    Commentaire createCommentaire(Commentaire commentaire);
    Commentaire getCommentaireById(Long id_Commentaire);
    List<Commentaire> getAllCommentaires();
    Commentaire updateCommentaire( Commentaire commentaire);
    Boolean deleteCommentaire(Long id_Commentaire);
    List<Commentaire> getCommentsByPostId(Long id_Post);
}
