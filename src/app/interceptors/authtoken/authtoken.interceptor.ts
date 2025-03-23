import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from '../../../environments/environment';

export const authtokenInterceptor: HttpInterceptorFn = (req, next) => {
  const apiUrl = `${environment.apiUrl}/api/auth/`;

  // 1️⃣ Récupérer le token d'authentification
  const token = localStorage.getItem('token');

  // 2️⃣ Définir les URLs à exclure
  const excludedUrls = [
    // login
    `${environment.apiUrl}/api/auth/login/`,
    // inscription
    `${environment.apiUrl}/api/auth/register/`,
  ];

  // Vérifier si la requête doit être exclue
  const isExcluded = excludedUrls.some(url => req.url.startsWith(url));

  // 3️⃣ Si l'URL est exclue, envoyer la requête sans modification
  if (isExcluded) {
    return next(req);
  }

  // 4️⃣ Ajouter le token aux autres requêtes si disponible
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }
  return next(req);
//   TODO: test
};
