import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesVoituresService {
  private apiUrl = `${environment.apiUrl}/api/`;

  constructor(private http: HttpClient) {
  }

  //
  // getTypeOfCar() {
  //   if (localStorage.getItem('typeofcars')==null){
  //     this.gettypeofcars$()
  //   }
  //   return localStorage.getItem('typeofcars');
  // }
  getBrands() {
    if (localStorage.getItem('brands')==null){
      this.getBrand$()
    }
    return localStorage.getItem('brands');

  }

  getBrand$(){
    console.log("getBrand$")
    const storedData = localStorage.getItem('brands');
    if (storedData) {
      console.log("brands deja existant : localStorage")
      return of(JSON.parse(storedData)); // Convertir en JSON et renvoyer un Observable
    }

    return this.http.get<{_id: string, name: string}[]>
      (this.apiUrl + "car/brand").pipe
      (
        map(
          data => {
            console.log(data)

            localStorage.setItem('brands', JSON.stringify(data));
            return data;
          }
        ),
        catchError(error => {
          console.error("Erreur lors de la récupération des brands", error);
          return throwError(() => new Error("Échec de récupération des brands"));
        })
      )
  }


  gettypeofcars$() {
    console.log("gettypeofcars$")
    const storedData = localStorage.getItem('typeofcars');
    if (storedData) {
      console.log("typeofcars deja existant : localStorage")
      return of(JSON.parse(storedData)); // Convertir en JSON et renvoyer un Observable
    }

    return this.http.get<{ _id: string, name: string, priceCoefficient: number, timeCoefficient: number }[]>(
      this.apiUrl + "car/type"
    ).pipe(
      map(data => {
        console.log(data)
        // Stocker les données dans le localStorage
        localStorage.setItem('typeofcars', JSON.stringify(data));
        return data; // Retourner les données pour que le composant puisse aussi les utiliser
      }),
      catchError(error => {
        console.error("Erreur lors de la récupération des types de voitures", error);
        return throwError(() => new Error("Échec de récupération des types de voitures"));
      })
    );
  }

  getMesVoitures$(client: string | undefined) {
    console.log("getMesVoitures$")
      return this.http.get<{ _id: string, client: string,brand: string,typeOfCar:string,model:string,year:number, plateNumber: string }[]>
      (this.apiUrl+"car/client/"+client)
        .pipe(
          map(data => {
            console.log(data)
            localStorage.setItem('my_cars', JSON.stringify(data));
            return data;
          }),
          catchError(error => {
          console.error("Erreur lors de getMesVoitures$ : ", error);
          return throwError(() => new Error("Erreur lors de getMesVoitures$"));
        })
      )
  }

  enregistrer_voiture$(
    voiture_params: { client: string | undefined; model: any;  year: any; typeOfCar: any; brand: any; plateNumber: any }
  ) {
    return this.http.post(this.apiUrl + 'car/client' , voiture_params).pipe(
      tap(
        (result:any) => {
          console.log(result)
        }
      ),catchError(error => {
        console.error("Erreur lors de la enregistrement de voiture : ", error);
        return throwError(() => new Error("Erreur lors de la enregistrement de voiture"));
      })
    )
  }
}
