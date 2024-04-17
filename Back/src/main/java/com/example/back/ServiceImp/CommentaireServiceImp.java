package com.example.back.ServiceImp;

import com.example.back.Entities.Commentaire;
import com.example.back.Entities.Post;
import com.example.back.Entities.User;
import com.example.back.Repositories.CommentaireRepository;
import com.example.back.Repositories.PostRepository;
import com.example.back.Repositories.UserRepository;
import com.example.back.Repositories.CommentaireRepository;
import com.example.back.Services.CommentaireService;
import com.example.back.Services.PostService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@RequiredArgsConstructor
@Service
public class CommentaireServiceImp implements CommentaireService {
    private final CommentaireRepository commentaireRepository;
    private final PostService postService;
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    @Override
    public Commentaire createCommentaire(Commentaire commentaire) {
        return commentaireRepository.save(commentaire);

    }

    @Override
    public Commentaire getCommentaireById(Long idCommentaire) {
        return commentaireRepository.findById(idCommentaire).orElse(null);
    }

    @Override
    public List<Commentaire> getAllCommentaires() {
        return commentaireRepository.findAll();
    }

    @Override
    public Commentaire updateCommentaire(Commentaire commentaire) {
        // Check if the commentaire exists in the database
        Commentaire existingCommentaire = commentaireRepository.findById(commentaire.getIdCommentaire())
                .orElseThrow(() -> new EntityNotFoundException("Commentaire not found with id " + commentaire.getIdCommentaire()));
        // Save the updated commentaire
        return commentaireRepository.save(existingCommentaire);
    }

    @Override
    public Boolean deleteCommentaire(Long idCommentaire) {
        commentaireRepository.deleteById(idCommentaire);
        return false;
    }

    @Transactional
    @Override
    public List<Commentaire> getCommentsByPostId(Long idPost) {
        return commentaireRepository.findCommentsByPostId(idPost);
    }

    @Override
    public Commentaire createCommentaireWithPost(Commentaire commentaire, Long postId) {
        Post post = postService.getPostById(postId);
        if (post != null) {
            commentaire.setPost(post);
            return commentaireRepository.save(commentaire);
        }
        return null;
    }

    @Override
    @Transactional

    public Commentaire addCommentToPostAndAssignToUser(Commentaire commentaire, Long postId, Long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));



        // Verify that the post exists and get it
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found with id: " + postId));

        // Set the post to the comment
        commentaire.setPost(post);

        // Save the comment
        return commentaireRepository.save(commentaire);
    }
    }



