import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { User } from '../../models/user/user';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninupService {
  private apiUrl = `${environment.apiUrl}/api/auth/`;
  private apiUrl_users = `${environment.apiUrl}/api/users/`;

  constructor(private http: HttpClient) { }

  // TODO : inscription miandry modification back : mijery hoe efa nisy ve , dia sady manisy token
  inscription(name: string, password: string, email: string): Observable<User | undefined> {
    const register_params = {
      name: name,
      email: email,
      password: password,
      role: 'client'
    }
    return this.http.post(this.apiUrl + 'register/', register_params).pipe(
      tap((result: any) => {
        console.warn("reussi : " + result);
        // console.log(result);

        localStorage.setItem('token', result['token']);
        console.log(this.decodeToken(result['token']));

        const userData = this.decodeToken(result['token']);
        console.log(userData)
        const user = new User(userData.id,userData.name, userData.email, userData.role);
        console.log("user")
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user)); // Convertit l'objet en JSON

      }
      ))
  }

  add_mecanicien(name: string, password: string, email: string): Observable<User | undefined> {
    const register_params = {
      name: name,
      email: email,
      password: password,
      role: 'mecanicien'
    }
    return this.http.post(this.apiUrl + 'register/', register_params).pipe(
      tap((result: any) => {
          console.warn("reussi : " + result);
        }
      ))
  }


  getMecanicien$(){
    console.log("getMecanicien$")
    const storedData = localStorage.getItem('mecaniciens');
    if (storedData) {
      console.log("getMecanicien$ deja existant : localStorage")
      return of(JSON.parse(storedData)); // Convertir en JSON et renvoyer un Observable
    }

    return this.http.get<{message: string, mechanics: any[]}>
    (this.apiUrl_users + "mechanics").pipe
    (
      map(
        data => {
          console.log(data)
          localStorage.setItem('mecaniciens', JSON.stringify(data));
          return data;
        }
      ),
      catchError(error => {
        console.error("Erreur lors de getMecanicien$", error);
        return throwError(() => new Error("Échec getMecanicien$"));
      })
    )
  }



  getuserconnected(): null | User {
    const userlocalStorage = localStorage.getItem('user');
    // console.log('ary ato ndray ary ',userlocalStorage);
    if (userlocalStorage) {
      const objuser = JSON.parse(userlocalStorage)
      // const user = new User(objuser.name, objuser.email, objuser.role); -> code balita nefa mialivola tsy mahazo an'ilay user
      const user = new User(objuser._id,objuser._name, objuser._email, objuser._role); // code mialivola afaka fafana raha mandeha ilay ambony
      // console.log('ary ato ndray ary ',user);
      return user;
    } else {
      return null
    }
  }

  login$(loginparams: { email: string, password: string }): Observable<User | undefined> {
    return this.http.post(this.apiUrl + 'login/', loginparams).pipe(
      tap((result: any) => {
        console.warn("reussi : " + result);
        // console.log(result);

        localStorage.setItem('token', result['token']);
        console.log(this.decodeToken(result['token']));

        const userData = this.decodeToken(result['token']);
        console.log(userData)
        const user = new User(userData.id,userData.name, userData.email, userData.role);
        localStorage.setItem('user', JSON.stringify(user)); // Convertit l'objet en JSON
      },

      ))

  }

  // Décoder le token (sans vérification de la signature)
  decodeToken(token: string): any {
    try {
      const payload = atob(token.split('.')[1]); // Extraction du payload
      return JSON.parse(payload);
    } catch (error) {
      return null;
    }
  }

  removeUserlocalStorage(): void {
    console.warn("removeUserlocalStorage");
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

}
