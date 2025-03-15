import { Routes } from '@angular/router';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ContactComponent } from './contact/contact.component';
import { PackComponent } from './pack/pack.component';

export const routes: Routes = [
  { path: '', component: BienvenueComponent },
  { path: 'service', component: PackComponent },
  { path: 'contact', component: ContactComponent }
];
