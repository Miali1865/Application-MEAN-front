import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {ExpiredtokenService} from '../../services/expiredtoken/expiredtoken.service';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

export const expiredtokenInterceptor: HttpInterceptorFn = (req, next) => {
  const expiredtokenservice = inject(ExpiredtokenService)
  // return next(req);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Vérifiez si l'erreur est liée à un token JWT expiré
      if (error.status === 400 && error.error.error == 'jwt expired') {
        console.log("expiredtokenInterceptor : jwt expired")
        // Ouvrez le dialogue de reconnexion
        expiredtokenservice.openReconnectionDialog();
      }else {
        console.log("expiredtokenInterceptor" +error.status+" " + error.error)
        console.log(error.error)
      }

      // Relancez l'erreur pour qu'elle puisse être gérée ailleurs si nécessaire
      return throwError(error);
    })
  );
};
