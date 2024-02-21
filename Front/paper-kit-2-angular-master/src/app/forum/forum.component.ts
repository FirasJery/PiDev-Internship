import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'; // Update this path as necessary
import { Post } from '../models/post.model'; // Update this path as necessary
import { Commentaire } from '../models/commentaire.model'; // Update this path as necessary

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  posts: Post[] = [];
  showAddPostForm: boolean = false;
  newPost: Post = new Post(null, '', '', false, new Date(), []);
  selectedPost: Post | null = null;
  newComment: Commentaire = new Commentaire(null, 0, 0, '', new Date());

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (error) => console.error(error)
    });
  }

  addPost(): void {
    this.postService.createPost(this.newPost).subscribe({
      next: (post) => {
        this.posts.push(post);
        this.showAddPostForm = false;
        this.newPost = new Post(null, '', '', false, new Date(), []); // Reset the newPost
      },
      error: (error) => console.error(error)
    });
  }

  editPost(post: Post): void {
    // Here you would set the selected post and possibly show a form to edit
    this.selectedPost = post;
    // You can also set up a form model to bind to your form if using reactive forms
  }

  confirmDeletePost(post: Post): void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.deletePost(post);
    }
  }

  deletePost(post: Post): void {
    this.postService.deletePost(post.id_Post).subscribe({
      next: () => {
        this.posts = this.posts.filter(p => p.id_Post !== post.id_Post);
      },
      error: (error) => console.error(error)
    });
  }

  selectPost(post: Post): void {
    // Here you would set the selected post to show its comments
    this.selectedPost = this.selectedPost === post ? null : post;
  }

  addComment(post: Post): void {
    // Assuming your Commentaire model and service method handle linking the comment to the post
    this.postService.addComment(this.newComment, post.id_Post).subscribe({
      next: (comment) => {
        post.commentaireSet.push(comment);
        this.newComment = new Commentaire(null, 0, 0, '', new Date()); // Reset the newComment
      },
      error: (error) => console.error(error)
    });
  }

  // ... You would continue to add methods for updating a comment, deleting a comment, etc.
}
