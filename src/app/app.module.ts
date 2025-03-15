import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Importation des composants
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ContactComponent } from './contact/contact.component';

// Importation de la configuration des routes
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BienvenueComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configuration des routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
