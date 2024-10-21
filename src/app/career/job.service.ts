import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    // Mock API call. Replace this URL with your backend API endpoint
    return this.http.get<any>('https://api.example.com/jobs');
  }
}
