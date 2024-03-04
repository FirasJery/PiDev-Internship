import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postulation } from  '../../models/postulation.model';


@Injectable({
  providedIn: 'root'
})
export class PostulationService {

  private apiUrl = 'http://localhost:9090/api/services/postulation';

  constructor(private http: HttpClient) { }

  addPostulation(postulation: Postulation, sujetId: number): Observable<Postulation> {
    return this.http.post<Postulation>(`${this.apiUrl}/add?sujetId=${sujetId}`, postulation);
  }
  

  updatePostulation(postulation: Postulation, id: number): Observable<Postulation> {
    return this.http.put<Postulation>(`${this.apiUrl}/${id}`, postulation);
  }

  getAllPostulations(): Observable<Postulation[]> {
    return this.http.get<Postulation[]>(this.apiUrl);
  }

  getPostulationById(id: number): Observable<Postulation> {
    return this.http.get<Postulation>(`${this.apiUrl}/${id}`);
  }

  deletePostulation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
