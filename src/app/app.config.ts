import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ContactComponent } from './contact/contact.component';
import { PackListComponent } from './components/pack-list/pack-list.component';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule, RouterModule.forRoot([
      { path: '', component: BienvenueComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'packs', component: PackListComponent }
    ]))
  ],
  declarations: [HeaderComponent, FooterComponent, BienvenueComponent, ContactComponent],
  imports: [RouterModule]
};
