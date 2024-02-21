import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sujet } from "./models/sujet.model";

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  private apiUrl = 'http://localhost:9090/api/services/sujet'; 

  constructor(private http: HttpClient) { }

  getAllSujets(sortField: string, searchTerm: string): Observable<Sujet[]> {
    // Append sort field and search term as query parameters
    const params = {
      sort: sortField,
      search: searchTerm // Pass the searchTerm as a query parameter
    };
    return this.http.get<Sujet[]>(this.apiUrl, { params });
  }
  
}
