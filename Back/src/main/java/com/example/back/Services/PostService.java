package com.example.back.Services;

import com.example.back.Entities.Post;


import java.util.List;

public interface PostService {
    Post createPost(Post post);
    Post getPostById(Long id_Post);
    List<Post> getAllPosts();
    Post updatePost( Post post);
   Boolean deletePost(Long id_Post);
}
