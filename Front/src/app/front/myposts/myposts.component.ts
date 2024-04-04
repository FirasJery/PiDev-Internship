import {ChangeDetectorRef, Component} from '@angular/core';
import {Post} from "../../Modules/PostModule/Post.Module";
import {CommentaireService} from "../../Services/CommentaireService/commentaire.service";
import { PostService } from '../../Services/PostService/post.service'; // Add this line

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrl: './myposts.component.css'
})
export class MypostsComponent {
  posts: Post[] = [];
  editingPost: Post | null = null;
  newPost: Post = {
    idPost: 0,
    contenu_Post: '',
    sujet_Post: '',
    isAnonymous: false,
    date_Post: new Date().toISOString(),
    profileImage: ''


  };



  constructor(private postService: PostService,
              private commentaireService: CommentaireService,
               private cd: ChangeDetectorRef ) // Inject ChangeDetectorRef)
  { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  deletePost(idPost: number): void {
    this.postService.deletePost(idPost).subscribe(() => {
      this.posts = this.posts.filter(post => post.idPost !== idPost);
    });
  }

  editPost(post: Post): void {
    this.editingPost = { ...post }; // Create a copy of the post to edit
  }

  submitEdit(): void {
    if (this.editingPost) {
      this.postService.updatePost(this.editingPost).subscribe(updatedPost => {
        const index = this.posts.findIndex(post => post.idPost === updatedPost.idPost);
        if (index !== -1) {
          this.posts[index] = updatedPost; // Update the post in the array
        }
        this.editingPost = null; // Clear the editing post
      });
    }
  }

  cancelEdit(): void {
    this.editingPost = null; // Cancel editing and clear the form
  }
  addPost(): void {
    this.postService.createPost(this.newPost).subscribe(post => {
      this.posts.push(post); // Add the new post to the posts array
      // Reset the newPost object for the next entry
      this.newPost = {
        idPost: 0,
        contenu_Post: '',
        sujet_Post: '',
        isAnonymous: false,
        date_Post: new Date().toISOString(),
        profileImage: ''


      };
    });
  }


  viewComments(post: Post): void {
    // If comments have not been fetched yet, fetch them
    if (!post.commentaireSet) {
      this.commentaireService.getCommentsByPostId(post.idPost).subscribe(comments => {
        post.commentaireSet = comments;
        post.showComments = true; // Add this property to your Post model if not present
      });
    } else {
      // If comments are already fetched, just toggle the visibility
      post.showComments = !post.showComments;
    }
  }

}
