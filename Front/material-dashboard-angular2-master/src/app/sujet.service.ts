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
  
}
