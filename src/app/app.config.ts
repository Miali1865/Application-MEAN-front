import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ContactComponent } from './contact/contact.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig = {
  providers: [
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
