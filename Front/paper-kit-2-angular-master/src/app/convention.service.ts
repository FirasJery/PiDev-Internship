import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Convention} from "./models/convention.model";

@Injectable({
  providedIn: 'root'
})
export class ConventionService {

  private apiUrl = 'http://localhost:9090/api/services/convention/addConvention';

  constructor(private http: HttpClient) {}

  addConvention(convention: Convention) {
    return this.http.post(this.apiUrl, convention);
  }
}
