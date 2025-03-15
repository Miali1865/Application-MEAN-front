import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  private apiUrl = `${environment.apiUrl}/api/services/pack`;

  constructor(private http: HttpClient) {}

  getPacks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
