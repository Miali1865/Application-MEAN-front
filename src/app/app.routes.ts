import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import {BienvenueComponent} from './pages/bienvenue/bienvenue.component';
import {LoginComponent} from './pages/login/login.component';
import {LayoutAccueilComponent} from './layout/layout-accueil/layout-accueil.component';
import {CollectionsListComponent} from './pages/gestion-donnees/collections-list/collections-list.component';
import {InscriptionClientComponent} from './pages/inscription-client/inscription-client.component';

export const routes: Routes = [

  {
    path: 'accueil',
    component: LayoutAccueilComponent,
    children:[
      { path: '', component: BienvenueComponent , title : 'Accueil'},
      { path: 'contact', component: ContactComponent },

    ]
  },

  {
    path: 'manager',
    component: LayoutAccueilComponent,
    children:[
      { path: 'collectionslist', component: CollectionsListComponent , title : 'CollectionsList'},
      { path: '', redirectTo: 'collectionslist', pathMatch: 'full' },

    ]
  },

  // mecanicien

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },


  { path: 'login', component: LoginComponent,title: 'Login' },
  { path: 'inscription', component: InscriptionClientComponent ,title: 'Inscription'},
  { path: 'packs', component: PackListComponent },
];
