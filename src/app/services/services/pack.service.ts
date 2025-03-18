import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  private apiUrl = `${environment.apiUrl}/api/services/pack`;

  constructor(private http: HttpClient) {}

  getPacks() {
    console.log("getPacks")
    return this.http.get<any>(this.apiUrl);
  }
}
