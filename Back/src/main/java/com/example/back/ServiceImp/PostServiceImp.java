package com.example.back.ServiceImp;

import com.example.back.Entities.Commentaire;
import com.example.back.Entities.Post;
import com.example.back.Repositories.PostRepository;
import com.example.back.Services.PostService;
import lombok.RequiredArgsConstructor;

import org.springdoc.api.OpenApiResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImp implements PostService {

    private final PostRepository postRepository;





    @Override
    public Post createPost(Post post) {
        return postRepository.save(post);
       }


    @Override
    public Post getPostById(Long idPost) {
        return postRepository.findById(idPost).orElse(null);
    }

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post updatePost(Post post) {
        Post existingPost = postRepository.findById(post.getIdPost())
                .orElseThrow(() -> new OpenApiResourceNotFoundException("Post not found with id " + post.getIdPost()));

        existingPost.setContenu_Post(post.getContenu_Post());
        existingPost.setSujet_Post(post.getSujet_Post());
        existingPost.setAnonymous(post.isAnonymous());
        existingPost.setDate_Post(post.getDate_Post());
        existingPost.setProfileImage(post.getProfileImage());

        // Update the post field for each commentaire
        if (post.getCommentaires() != null) {
            for (Commentaire commentaire : post.getCommentaires()) {
                commentaire.setPost(existingPost);
            }
        }

        return postRepository.save(existingPost);
    }


    @Override
    public Boolean deletePost(Long idPost) {
        postRepository.deleteById(idPost);
        return true;
    }
    public Post likePost(Long idPost) {
        Post post = postRepository.findById(idPost)
                .orElseThrow(() -> new OpenApiResourceNotFoundException("Post not found with id " + idPost));

        if (post.isLikedByCurrentUser()) {
            post.setLikes(post.getLikes() - 1);
            post.setLikedByCurrentUser(false);
        } else {
            post.setLikes(post.getLikes() + 1);
            post.setLikedByCurrentUser(true);

            // If the post was disliked by the current user, remove the dislike
            if (post.isDislikedByCurrentUser()) {
                post.setDislikes(post.getDislikes() - 1);
                post.setDislikedByCurrentUser(false);
            }
        }

        return postRepository.save(post);
    }


    public Post dislikePost(Long idPost) {
        Post post = postRepository.findById(idPost)
                .orElseThrow(() -> new OpenApiResourceNotFoundException("Post not found with id " + idPost));

        if (post.isDislikedByCurrentUser()) {
            post.setDislikes(post.getDislikes() - 1);
            post.setDislikedByCurrentUser(false);
        } else {
            post.setDislikes(post.getDislikes() + 1);
            post.setDislikedByCurrentUser(true);

            // If the post was liked by the current user, remove the like
            if (post.isLikedByCurrentUser()) {
                post.setLikes(post.getLikes() - 1);
                post.setLikedByCurrentUser(false);
            }
        }

        return postRepository.save(post);
    }
    public Post unlikePost(Long idPost) {
        Post post = postRepository.findById(idPost)
                .orElseThrow(() -> new OpenApiResourceNotFoundException("Post not found with id " + idPost));

        if (post.isLikedByCurrentUser()) {
            post.setLikes(post.getLikes() - 1);
            post.setLikedByCurrentUser(false);
            return postRepository.save(post);
        }

        return post;
    }

    public Post undislikePost(Long idPost) {
        Post post = postRepository.findById(idPost)
                .orElseThrow(() -> new OpenApiResourceNotFoundException("Post not found with id " + idPost));

        if (post.isDislikedByCurrentUser()) {
            post.setDislikes(post.getDislikes() - 1);
            post.setDislikedByCurrentUser(false);
            return postRepository.save(post);
        }

        return post;
    }


    }




