import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Pack} from '../../models/pack/pack';
import {Observable, throwError} from 'rxjs';
import {ServicesReparation} from '../../models/services_reparation/services-reparation';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  private apiUrl = `${environment.apiUrl}/api/services`;
  constructor(private http: HttpClient) {}

  getPacks$() {
    console.log("getPacks")
    return this.http.get<any>(this.apiUrl + "/pack").pipe(
      map(data => data.map(
        (packs:
           { _id:string,name: string | null; description: string | null; }
        ) => new Pack(packs._id, packs.name, packs.description, null))),
      catchError(error => {
        throw error;
      })
    );
  }

  getpacks_services$(id: string|null) {
    console.log("getpacks_services$")
    return this.http.get<ServicesReparation[]>(`${this.apiUrl}/getServicesByPack/${id}`).pipe(
      map(data =>
        data.map(service =>
          new ServicesReparation(service.id, service.name, service.description, null, service.estimatedTime)
        )
      ),
      catchError(error => {
        console.error('Erreur lors de la récupération des services:', error);
        return throwError(() => error); // Correction ici
      })
    );
  }
}
