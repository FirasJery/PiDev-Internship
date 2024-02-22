import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sujet } from './models/sujet.model';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  public apiUrl = 'http://localhost:9090/api/services/sujet';

  constructor(private http: HttpClient) { }

  getAllSujets(sortField: string, searchTerm: string): Observable<Sujet[]> {
    const params = { sort: sortField, search: searchTerm };
    return this.http.get<Sujet[]>(this.apiUrl, { params });
  }

  addSujet(sujet: Sujet): Observable<Sujet> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Sujet>(url, sujet);
  }

  modifierSujet(idSujet: number, sujet: Sujet): Observable<void> {
    const url = `${this.apiUrl}/update/${idSujet}`;
    return this.http.put<void>(url, sujet);
  }

  getSujetById(id: number): Observable<Sujet> {
    return this.http.get<Sujet>(`${this.apiUrl}/${id}`);
  }

  supprimerSujet(idSujet: number): Observable<void> {
    const url = `${this.apiUrl}/${idSujet}`;
    return this.http.delete<void>(url);
  }
}
