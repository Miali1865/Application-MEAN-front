import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {ServicesReparation} from '../../models/services_reparation/services-reparation';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = `${environment.apiUrl}/api/services`;
  constructor(private http: HttpClient) {}

  getServices$(){
    console.log("getServices")
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.map(
        (serv:
           {
             name: string | null; description: string | null; basePrice:number | null; estimatedTime: number | null
           }
        ) => new ServicesReparation(null, serv.name, serv.description, serv.basePrice,serv.estimatedTime))),
      catchError(error => {
        throw error;
      })
    );
  }
}
