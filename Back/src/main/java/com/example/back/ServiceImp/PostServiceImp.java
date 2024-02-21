package com.example.back.ServiceImp;

import com.example.back.Entities.Post;
import com.example.back.Repositories.PostRepository;
import com.example.back.Services.PostService;
import lombok.AllArgsConstructor;
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
    public Post getPostById(Long id_Post) {
        return postRepository.findById(id_Post)
                .orElseThrow(() -> new OpenApiResourceNotFoundException("Post not found with id " + id_Post));
    }

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post updatePost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Boolean deletePost(Long id_Post) {
        postRepository.deleteById(id_Post);
        return true;
    }
}





