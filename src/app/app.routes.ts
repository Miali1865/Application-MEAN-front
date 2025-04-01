import { Routes } from '@angular/router';
import { PackListComponent } from './components/pack-list/pack-list.component';
import { BienvenueComponent } from './pages/accueil/bienvenue/bienvenue.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionClientComponent } from './pages/inscription-client/inscription-client.component';
import { tokenguardChildGuard } from './guards/tokenguard/tokenguard-child.guard';
import { tokenguardActivateGuard } from './guards/tokenguard/tokenguard-activate.guard';
import { ManagerPageComponent } from './pages/manager/dashboard/manager-page.component';
import { AccueilClientComponent } from './pages/client/accueil-client/accueil-client.component';
import { CarMaintenanceComponent } from './pages/client/car-maintenance/car-maintenance.component';
import { ServiceClientComponent } from './pages/client/service-client/service-client.component';
import { ProfilClientComponent } from './pages/client/profil-client/profil-client.component';
import {SamelayoutComponent} from './layout/samelayout/samelayout.component';
import {ListServicesComponent} from './pages/accueil/list_services/list-services.component';
import {ListPacksComponent} from './pages/accueil/list-packs/list-packs.component';
import {MesVoituresComponent} from './pages/client/mes-voitures/mes-voitures.component';
import {FacturationsComponent} from './pages/client/facturations/facturations.component';
import {CalendrierComponent} from './pages/client/calendrier/calendrier.component';
import {
  GestionUtilisateursManagerComponent
} from './pages/manager/gestion-utilisateurs-manager/gestion-utilisateurs-manager.component';
import {FacturesManagerComponent} from './pages/manager/factures-manager/factures-manager.component';
import {MesTachesComponent} from './pages/mecanicien/mes-taches/mes-taches.component';
import {DashboardmecanicienComponent} from './pages/mecanicien/dashboardmecanicien/dashboardmecanicien.component';
import {AllVoituresComponent} from './pages/manager/all-voitures/all-voitures.component';
import {AllMecaniciensComponent} from './pages/manager/all-mecaniciens/all-mecaniciens.component';

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
    //   todo : guard role
    ],
    canActivate: [
      tokenguardActivateGuard
    ],
    children: [
      { path: '', component: ManagerPageComponent, title: 'Accueil Manager' },
      // { path: 'collectionslist', component: CollectionsListComponent, title: 'CollectionsList' },
      { path: 'tableau_bord', component: ManagerPageComponent, title: 'Tableau de bord' },
      { path: 'calendrier', component: ManagerPageComponent, title: 'Calendrier' },
      { path: 'facturations', component: FacturesManagerComponent, title: 'Factures' },
      { path: 'utilisateurs', component: GestionUtilisateursManagerComponent, title: 'Factures' },
      { path: 'all_voitures', component: AllVoituresComponent, title: 'Voitures' },
      { path: 'all_mecaniciens', component: AllMecaniciensComponent, title: 'Mécanicien' },

    ]
  },

  // mecanicien
  {
    path: 'mecanicien',
    component: SamelayoutComponent,
    canActivateChild: [
      tokenguardChildGuard
      //   todo : guard role
    ],
    canActivate: [
      tokenguardActivateGuard
    ],
    children: [
      { path: 'tableau_bord', component: DashboardmecanicienComponent, title: 'Tableau de bord' },
      { path: 'calendrier', component: CalendrierComponent, title: 'Mon calendrier' },
      { path: 'liste-taches', component: MesTachesComponent, title: 'Mes taches' },
    ]
  },

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
      { path: 'facturations', component: FacturationsComponent, title: 'Mes factures' },
      { path: 'calendrier', component: CalendrierComponent, title: 'Mon calendrier' },
      { path: 'voiture', component: MesVoituresComponent, title: 'Mes voitures' },
    ]
  },

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'inscription', component: InscriptionClientComponent, title: 'Inscription' },
  { path: 'packs', component: PackListComponent },
];
