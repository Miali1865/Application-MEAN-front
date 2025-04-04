import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private apiUrl = `${environment.apiUrl}/api/appointment/`;

  constructor(private http: HttpClient) {
  }

  get_nb_past$(){
    console.log("get_nb_past$")
    return this.http.get<any>(this.apiUrl+'past?date='+new Date().toISOString().split('T')[0]).pipe
    (
      map(
        data => {
          console.log(data)
          return data;
        }
      ),
      catchError(error => {
        console.error("Erreur lors de get_nb_past$", error);
        return throwError(() => new Error("Échec get_nb_past$"));
      })
    )
  }
  get_nb_today$(){
    console.log("get_nb_today$")
    return this.http.get<any>(this.apiUrl+'count?date='+new Date().toISOString().split('T')[0]).pipe
    (
      map(
        data => {
          console.log(data)
          return data;
        }
      ),
      catchError(error => {
        console.error("Erreur lors de get_nb_today$", error);
        return throwError(() => new Error("Échec get_nb_today$"));
      })
    )
  }
  get_nb_future$(){
    console.log("get_nb_future$")
    return this.http.get<any>(this.apiUrl+'future?date='+new Date().toISOString().split('T')[0]).pipe
    (
      map(
        data => {
          console.log(data)
          return data;
        }
      ),
      catchError(error => {
        console.error("Erreur lors de get_nb_future$", error);
        return throwError(() => new Error("Échec get_nb_future$"));
      })
    )
  }


  getrdv_and_detail$(){
    console.log("getrdv_and_detail$")
    return this.http.get<{message:string,
      appointmentsByDate: {
        date: string,
        timeSlots:{
          timeSlot:string,
          mechanic:string,
          status:string,
          service:string

        }[]
    }[]
    }>(this.apiUrl+'detail-booked').pipe
    (
      map(
        data => {
          console.log(data)
          return data;
        }
      ),
      catchError(error => {
        console.error("Erreur lors de getrdv_and_detail$", error);
        return throwError(() => new Error("Échec getrdv_and_detail$"));
      })
    )
  }

  getnb_per_rdv$(){
    console.log("getnb_per_rdv$")
    return this.http.get<{ message: string,
      appointmentsByDate: [
        {date:string,title:number,timeSlots:string[]},
      ]
    }>
    (this.apiUrl+'booked').pipe
    (
      map(
        data => {
          console.log(data)
          return data;
        }
      ),
      catchError(error => {
        console.error("Erreur lors de getrdv$", error);
        return throwError(() => new Error("Échec getrdv$"));
      })
    )
  }

  enregistrer_rdv$(
    idVoiture: string ,
    idService: string ,
    selectedDate: string ,
    selectedSlot: string
  ){
    return this.http.post(this.apiUrl + 'create-appointment', {idVoiture,idService,selectedDate,selectedSlot}).pipe(
      tap(
        (result: any) => {
          console.log(result)
        }
      ), catchError(error => {
        console.error("Erreur lors de enregistrer_rdv$ : ", error);
        return throwError(() => new Error("Erreur lors de enregistrer_rdv$"));
      })
    )

  }
}
