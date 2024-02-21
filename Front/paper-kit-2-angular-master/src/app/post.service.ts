import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post.model'; // Import your Post model here
import { Commentaire } from './models/commentaire.model'; // Import your Commentaire model here

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:9090/api/services/post'; // Your API path

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/all`);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/addpost`, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/updateP`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  addComment(comment: Commentaire, postId: number): Observable<Commentaire> {
    return this.http.post<Commentaire>(`${this.apiUrl}/commentaire/add`, {
      ...comment,
      post: { id_Post: postId } // Assuming your backend expects a 'post' object with an 'id_Post' property
    });
  }

  // Add methods for Commentaire operations using the CommentaireController paths
}
