import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sujet } from '../../models/sujet.model';


@Injectable({
  providedIn: 'root'
})


export class SujetService {
  private apiUrl = 'http://localhost:9090/api/services/sujet'; 

  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return this.apiUrl;
  }
  
  getAllSujets(sortField: string, searchTerm: string): Observable<Sujet[]> {
    // Append sort field and search term as query parameters
    const params = {
      sort: sortField,
      search: searchTerm // Pass the searchTerm as a query parameter
    };
    return this.http.get<Sujet[]>(this.apiUrl, { params });
  }

  getSujets(): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(`${this.apiUrl}`);
  }
  searchSujets(searchTerm: string): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(`${this.apiUrl}/search`, { params: { searchTerm } });
  }

  addSujet(sujet: Sujet): Observable<Sujet> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Sujet>(url, sujet);
  }

  updateSujet(sujet: Sujet): Observable<Sujet> {
    const url = `${this.apiUrl}/${sujet.idsujet}`;
    return this.http.put<Sujet>(url, sujet);
  }

  getSujetById(idsujet: number): Observable<Sujet> {
    return this.http.get<Sujet>(`${this.apiUrl}/${idsujet}`);
  }

  supprimerSujet(idSujet: number): Observable<void> {
    const url = `${this.apiUrl}/${idSujet}`;
    return this.http.delete<void>(url);
  }

  filterByNbretudiantDescending(): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(`${this.apiUrl}/filter/byNbretudiantDesc`);
  }

  filterByDureeDescending(): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(`${this.apiUrl}/filter/byDureeDesc`);
  }


}
