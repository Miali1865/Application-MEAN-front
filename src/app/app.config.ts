import {importProvidersFrom, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {BienvenueComponent} from './pages/bienvenue/bienvenue.component';

export const appConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(BrowserModule, RouterModule.forRoot([
      { path: '', component: BienvenueComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'packs', component: PackListComponent }
    ]))
  ],
  declarations: [HeaderComponent, FooterComponent, BienvenueComponent, ContactComponent],
  imports: [RouterModule]
};
