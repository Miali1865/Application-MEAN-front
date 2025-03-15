import { Routes } from '@angular/router';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: BienvenueComponent },
  { path: 'contact', component: ContactComponent }
];
