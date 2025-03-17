import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import {BienvenueComponent} from './pages/bienvenue/bienvenue.component';
import {LoginComponent} from './pages/login/login.component';
import {LayoutAccueilComponent} from './layout/layout-accueil/layout-accueil.component';

export const routes: Routes = [

  {
    path: 'accueil',
    component: LayoutAccueilComponent,
    children:[
      { path: '', component: BienvenueComponent },
      { path: 'contact', component: ContactComponent },

    ]
  },

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },


  { path: 'login', component: LoginComponent },
  { path: 'packs', component: PackListComponent },
];
