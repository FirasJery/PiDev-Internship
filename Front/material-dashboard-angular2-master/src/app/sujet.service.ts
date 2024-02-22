import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sujet } from './models/sujet.model';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  private apiUrl = 'http://localhost:9090/api/services/sujet';

  constructor(private http: HttpClient) { }

  getAllSujets(sortField: string, searchTerm: string): Observable<Sujet[]> {
    const params = { sort: sortField, search: searchTerm };
    return this.http.get<Sujet[]>(this.apiUrl, { params });
  }

  updateSujet(sujet: Sujet): Observable<Sujet> {
    return this.http.put<Sujet>(`${this.apiUrl}/${sujet.id_Sujet}`, sujet);
  }

  getSujetById(id: number): Observable<Sujet> {
    return this.http.get<Sujet>(`${this.apiUrl}/${id}`);
  }

  supprimerSujet(idSujet: number): Observable<void> {
    const url = `${this.apiUrl}/${idSujet}`;
    return this.http.delete<void>(url);
  }
}
