import { LOCALE_ID} from '@angular/core';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import {MessageService} from "primeng/api";

import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {LoaderspinnerService} from './services/loaderspinner/loaderspinner.service';
import {loaderspinnerInterceptor} from './interceptors/loaderspinner/loaderspinner.interceptor';
import {authtokenInterceptor} from './interceptors/authtoken/authtoken.interceptor';
import {ExpiredtokenService} from './services/expiredtoken/expiredtoken.service';
import {expiredtokenInterceptor} from './interceptors/expiredtoken/expiredtoken.interceptor';

export const appConfig = {
  providers: [
    MessageService,
    LoaderspinnerService,
    ExpiredtokenService,
    provideAnimationsAsync(), // Configuration recommandée pour Angular 19
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideHttpClient(
      withInterceptors([loaderspinnerInterceptor,authtokenInterceptor, expiredtokenInterceptor])
    ),
    provideRouter(routes),
  ],
  imports: [RouterModule]
};
