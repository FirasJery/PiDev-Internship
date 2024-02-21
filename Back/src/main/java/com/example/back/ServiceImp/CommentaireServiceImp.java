package com.example.back.ServiceImp;

import com.example.back.Entities.Commentaire;
import com.example.back.Repositories.CommentaireRepository;
import com.example.back.Services.CommentaireService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springdoc.api.OpenApiResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;


@RequiredArgsConstructor
@Service
public class CommentaireServiceImp implements CommentaireService {
    private final CommentaireRepository commentaireRepository;
    @Override
    public Commentaire createCommentaire(Commentaire commentaire) {
       return commentaireRepository.save(commentaire);

    }

    @Override
    public Commentaire getCommentaireById(Long id_Commentaire) {
        return commentaireRepository.findById(id_Commentaire)
                .orElseThrow(() -> new OpenApiResourceNotFoundException("commantaire not found with id " + id_Commentaire));
    }

    @Override
    public List<Commentaire> getAllCommentaires() {
        return commentaireRepository.findAll();
    }

    @Override
    public Commentaire updateCommentaire(Commentaire commentaire) {
        return commentaireRepository.save(commentaire);
    }

    @Override
    public Boolean deleteCommentaire(Long id_Commentaire) {
        commentaireRepository.deleteById(id_Commentaire);
        return false;
    }

    @Transactional
    @Override
    public List<Commentaire> getCommentsByPostId(Long id_Post) {
        return commentaireRepository.findCommentsByPostId(id_Post);
    }
}

