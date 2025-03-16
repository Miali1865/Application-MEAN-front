import { Routes } from '@angular/router';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ContactComponent } from './contact/contact.component';
import { PackListComponent } from './components/pack-list/pack-list.component';

export const routes: Routes = [
  { path: '', component: BienvenueComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'packs', component: PackListComponent },
];
