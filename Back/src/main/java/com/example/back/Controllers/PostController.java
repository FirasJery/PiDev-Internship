package com.example.back.Controllers;

import com.example.back.Entities.Commentaire;
import com.example.back.Entities.Post;
import com.example.back.ServiceImp.PostServiceImp;
import com.example.back.Services.CommentaireService;
import com.example.back.Services.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/services/post")

public class PostController {
    private final PostService postService;
    private final CommentaireService commentaireService;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addpost")
    public Post createPost(@RequestBody Post post) {
        return postService.createPost(post);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public Post getPostById(@PathVariable(value = "id") Long id_Post) {
        Post post = postService.getPostById(id_Post);
        return post;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/updateP")
    public Post updatePost(@RequestBody Post post) {
        return  postService.updatePost(post);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/{id_Post}")
    public boolean deletePost(@PathVariable Long id_Post) {
       Post post = postService.getPostById(id_Post);
        postService.deletePost(id_Post);
       return true;
}
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/add")
    public Commentaire createCommentaire(@RequestBody Commentaire commentaire){
        return commentaireService.createCommentaire(commentaire);
    }}
