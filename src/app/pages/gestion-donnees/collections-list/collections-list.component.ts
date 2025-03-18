import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {Collection} from '../../../models/collection/collection';

@Component({
  selector: 'app-collections-list',
  imports: [
    AccordionModule
  ],
  templateUrl: './collections-list.component.html',
  styleUrl: './collections-list.component.css',
  standalone:true
})
export class CollectionsListComponent {

  // all_collections:Collection[]
  all_collections=[
    new Collection("users",[
      "name"
      ,
      "email"
      ,
      "role"
    ]),
    new Collection("services",[
      "name"
      ,
      "description"
      ,
      "basePrice"
      ,
      "estimatedTime"
    ]),
    new Collection("packs",[
      "name"
      ,
      "description"
    ])


  ]
  accordion_item = [
    "Employes & Dossiers",
    "Familles",
    "Contrat & Departement & Fonctions",
    "Plannings",
    "Demandes Conges & Permssions",
    "Banques & Assurances",
    "Fautes & Sanctions",
    "Equipes & Horaires",
    "Notifications",
    "Droits"
  ];

}
