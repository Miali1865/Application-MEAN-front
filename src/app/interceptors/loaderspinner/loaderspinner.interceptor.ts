import { HttpInterceptorFn } from '@angular/common/http';
import {LoaderspinnerService} from '../../services/loaderspinner/loaderspinner.service';
import {inject} from '@angular/core';
import {timer} from 'rxjs';
import {finalize} from 'rxjs/operators';

export const loaderspinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const  DELAY_BEFORE_SHOWING = 500; // ms
  const loaderService = inject(LoaderspinnerService);

  loaderService.show(); // Afficher le spinner au début de la requête

  const timeoutSubscription = timer(DELAY_BEFORE_SHOWING).subscribe(() => {
    loaderService.show();
  });

  // return next(req);
  return next(req).pipe(
    finalize(() => {
      loaderService.hide();
      timeoutSubscription.unsubscribe();
    })
  );
};
