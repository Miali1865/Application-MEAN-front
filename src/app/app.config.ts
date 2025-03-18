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
import {loaderspinnerInterceptor} from './inetrceptors/loaderspinner/loaderspinner.interceptor';

export const appConfig = {
  providers: [
    MessageService,
    LoaderspinnerService,
    provideAnimationsAsync(), // Configuration recommandée pour Angular 19
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideHttpClient(
      withInterceptors([loaderspinnerInterceptor])
    ),
    provideRouter(routes),
  ],
  imports: [RouterModule]
};
