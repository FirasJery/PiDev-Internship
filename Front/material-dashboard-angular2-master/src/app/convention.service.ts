// src/app/services/convention.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConventionService {
  private apiUrl = 'http://localhost:9090/api/services/convention/getConventions';

  constructor(private http: HttpClient) { }

  getConventions(): Observable<Convention[]> {
    return this.http.get<Convention[]>(this.apiUrl);
  }
  validateConvention(id: number): Observable<any> {
    return this.http.put(`http://localhost:9090/api/services/convention/validateConvention/${id}`, null);
  }

}

export interface Convention {
  id_Convention: number;
  nom_entreprise: string;
  date_debut: Date;
  date_fin: Date;
  adresse: string;
  num_tel: number;
  nom_encadrant: string;
  email_encadrant: string;
  is_valid: boolean;
}
