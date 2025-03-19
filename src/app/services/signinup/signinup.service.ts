import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninupService {
  private apiUrl = `${environment.apiUrl}/api/auth/`;

  constructor(private http: HttpClient) {}

  // TODO : inscription miandry modification back : mijery hoe efa nisy ve , dia sady manisy token
  inscription(name: string,password: string,email: string){
    // return this.http.post(this.apiUrl + 'register/', loginparams).pipe(
  }

  getuserconnected():null|User{
    const userlocalStorage = localStorage.getItem('user');
    if (userlocalStorage) {
      const objuser = JSON.parse(userlocalStorage)
      const user = new User(objuser.name, objuser.email, objuser.role);
      return user;
    }else {
      return null
    }
  }

  login$(loginparams:{email:string,password:string}):Observable<User | undefined>{
    return this.http.post(this.apiUrl + 'login/', loginparams).pipe(
      tap((result: any) => {
        console.warn("reussi : " + result);
        // console.log(result);

        localStorage.setItem('token', result['token']);
        console.log(this.decodeToken(result['token']));

          const userData = this.decodeToken(result['token']);
          console.log(userData)
          const user = new User(userData.name, userData.email, userData.role);
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
