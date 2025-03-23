import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import {BienvenueComponent} from './pages/bienvenue/bienvenue.component';
import {LoginComponent} from './pages/login/login.component';
import {LayoutAccueilComponent} from './layout/layout-accueil/layout-accueil.component';
import {CollectionsListComponent} from './pages/gestion-donnees/collections-list/collections-list.component';
import {InscriptionClientComponent} from './pages/inscription-client/inscription-client.component';
import {tokenguardChildGuard} from './guards/tokenguard/tokenguard-child.guard';
import {tokenguardActivateGuard} from './guards/tokenguard/tokenguard-activate.guard';
import { LayoutManagerComponent } from './layout/manager/layout-manager/layout-manager.component';
import {ManagerPageComponent} from './pages/manager/dashboard/manager-page.component';
import { LayoutClientComponent } from './layout/client/layout-client/layout-client.component';
import {AccueilClientComponent} from './pages/client/accueil-client/accueil-client.component';
import {CarMaintenanceComponent} from './pages/client/car-maintenance/car-maintenance.component';
import {ServiceClientComponent} from './pages/client/service-client/service-client.component';
import {ProfilClientComponent} from './pages/client/profil-client/profil-client.component';

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
    component: LayoutManagerComponent,
    canActivateChild:[
      tokenguardChildGuard
    ],
    canActivate:[
      tokenguardActivateGuard
    ],
    children:[
      { path: '', component: ManagerPageComponent , title : 'Accueil Manager'},
      { path: 'collectionslist', component: CollectionsListComponent , title : 'CollectionsList'},
      // { path: 'dashboard', component: ManagerDashboardComponent , title : 'Manager dashboard'},

    ]
  },

  // mecanicien
  {
    path: 'client',
    component: LayoutClientComponent,
    canActivateChild:[
      tokenguardChildGuard
    ],
    canActivate:[
      tokenguardActivateGuard
    ],
    children:[
      { path: '', component: AccueilClientComponent , title : 'Accueil client'},
      { path: 'carnet', component: CarMaintenanceComponent , title : 'Carnet d\'entretien'},
      { path: 'service', component: ServiceClientComponent , title : 'Demande de service'},
      { path: 'profil', component: ProfilClientComponent , title : 'Information du client'},

    ]
  },

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },


  { path: 'login', component: LoginComponent,title: 'Login' },
  { path: 'inscription', component: InscriptionClientComponent ,title: 'Inscription'},
  { path: 'packs', component: PackListComponent },
];
