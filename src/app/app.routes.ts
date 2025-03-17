import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import {BienvenueComponent} from './pages/bienvenue/bienvenue.component';

export const routes: Routes = [

  { path: '', component: BienvenueComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'packs', component: PackListComponent },
];
