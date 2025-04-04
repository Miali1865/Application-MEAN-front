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
  private apiUrl_dahsboard = `${environment.apiUrl}/api/dashboard/best-service`;
  constructor(private http: HttpClient) {}

  getServices$(){
    console.log("getServices")
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => data.map(
        (serv:
           {
            _id:string ;name: string | null; description: string | null; basePrice:number | null; estimatedTime: number | null
           }
        ) => new ServicesReparation(serv._id, serv.name, serv.description, serv.basePrice,serv.estimatedTime))),
      catchError(error => {
        throw error;
      })
    );
  }

  getBestServices$(){
    console.log("apiUrl_dahsboard")
    return this.http.get<{
      topService:{
        name:string,
        totalRequests:number
      }
    }>(this.apiUrl_dahsboard).pipe(
      map(data => {
        console.log(data)
        return data;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

}
