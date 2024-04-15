import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiUrl = 'http://localhost:9090/files';

  constructor(private http: HttpClient) { }

  uploadFileToGoogleDrive(file: File, type: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/uploadToGoogleDrive?type=${type}`, formData);
  }
}