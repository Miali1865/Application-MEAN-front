import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import { BienvenueComponent } from './pages/accueil/bienvenue/bienvenue.component';
import { LoginComponent } from './pages/login/login.component';
import { CollectionsListComponent } from './pages/gestion-donnees/collections-list/collections-list.component';
import { InscriptionClientComponent } from './pages/inscription-client/inscription-client.component';
import { tokenguardChildGuard } from './guards/tokenguard/tokenguard-child.guard';
import { tokenguardActivateGuard } from './guards/tokenguard/tokenguard-activate.guard';
import { TableauBordComponent } from './pages/manager/tableau_bord/tableau-bord/tableau-bord.component';
import { ManagerPageComponent } from './pages/manager/dashboard/manager-page.component';
import { AccueilClientComponent } from './pages/client/accueil-client/accueil-client.component';
import { CarMaintenanceComponent } from './pages/client/car-maintenance/car-maintenance.component';
import { ServiceClientComponent } from './pages/client/service-client/service-client.component';
import { ProfilClientComponent } from './pages/client/profil-client/profil-client.component';
import {SamelayoutComponent} from './layout/samelayout/samelayout.component';
import {ListServicesComponent} from './pages/accueil/list_services/list-services.component';
import {ListPacksComponent} from './pages/accueil/list-packs/list-packs.component';

export const routes: Routes = [
  // sans utilisateur connecter
  {
    path: 'accueil',
    component: SamelayoutComponent,
    children: [
      { path: '', component: BienvenueComponent, title: 'Accueil' },
      { path: 'list_services', component: ListServicesComponent, title: 'Services' },
      { path: 'list_packs', component: ListPacksComponent, title: 'Packs' },
      // { path: 'contact', component: ContactComponent },

    ]
  },
  // manager
  {
    path: 'manager',
    component: SamelayoutComponent,
    canActivateChild: [
      tokenguardChildGuard
    ],
    canActivate: [
      tokenguardActivateGuard
    ],
    children: [
      { path: '', component: ManagerPageComponent, title: 'Accueil Manager' },
      // { path: 'collectionslist', component: CollectionsListComponent, title: 'CollectionsList' },
      { path: 'tableau_bord', component: TableauBordComponent, title: 'Tableau de bord' },

    ]
  },

  // mecanicien


  // client
  {
    path: 'client',
    component: SamelayoutComponent,
    canActivateChild: [
      tokenguardChildGuard
    ],
    canActivate: [
      tokenguardActivateGuard
    ],
    children: [
      { path: '', component: AccueilClientComponent, title: 'Accueil client' },
      { path: 'carnet', component: CarMaintenanceComponent, title: 'Carnet d\'entretien' },
      { path: 'service', component: ServiceClientComponent, title: 'Demande de service' },
      { path: 'profil', component: ProfilClientComponent, title: 'Information du client' },
      { path: 'facturation', component: ProfilClientComponent, title: 'Mes factures' },
      { path: 'services', component: ProfilClientComponent, title: 'Hitoriques services' },
    ]
  },

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'inscription', component: InscriptionClientComponent, title: 'Inscription' },
  { path: 'packs', component: PackListComponent },
];
