import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Importation des composants
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ContactComponent } from './contact/contact.component';
import { PackComponent } from './pack/pack.component';

// Importation de la configuration des routes
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BienvenueComponent,
    ContactComponent,
    PackComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
