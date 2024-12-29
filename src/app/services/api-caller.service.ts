import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  private urlBase = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.urlBase}${endpoint}`, data);
  }

  get<T>(endpoint: string, params: any = {}): Observable<T> {
    return this.http.get<T>(`${this.urlBase}${endpoint}`, { params });
  }
}
