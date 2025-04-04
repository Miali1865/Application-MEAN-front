import {Component, inject, OnInit} from '@angular/core';
import {TitleDescriptionComponent} from "../../../components/title-description/title-description.component";
import {RouterLink} from '@angular/router';
import {MesVoituresService} from '../../../services/voiture/mes-voitures.service';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {NgForOf} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MessagetoastService} from '../../../services/messagetoast/messagetoast.service';
import {ServicesReparation} from '../../../models/services_reparation/services-reparation';
import {ServiceService} from '../../../services/service/service.service';
import {ThousandPipe} from '../../../pipes/thousand/thousand.pipe';
import {RdvService} from '../../../services/rdv/rdv.service';

@Component({
  selector: 'app-manager-page',
  imports: [
    TitleDescriptionComponent,
    RouterLink,
    Button,
    Dialog,
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    ThousandPipe
  ],
  templateUrl: './manager-page.component.html',
  standalone: true,
  styleUrl: './manager-page.component.css'
})
export class ManagerPageComponent implements OnInit {
  count_voitures: number = 0;
  brands:any = [];
  typeofcars:any = [];
  packs:any = [];
  services: ServicesReparation[] = [];

  visible_brands: boolean = false;
  visible_typeofcars: boolean = false;
  visible_packs: boolean = false;
  visible_services: boolean = false;


  voitureService = inject(MesVoituresService)
  messageService = inject(MessagetoastService)
  rdvService = inject(RdvService)
  service = inject(ServiceService)

  form_new_brand: FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required])
    }
  )
  form_new_service: FormGroup = new FormGroup({
      name:new FormControl('',[Validators.required])
    }
  )
  topService: { topService: { name: string; totalRequests: number } } = { topService: { name: '', totalRequests: 0 } };
  rdv_past: number = 0;
  rdv_today: number = 0;
  rdv_futur: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.voitureService.getNbvoituresEnregistrer$().subscribe({
      // next: data => console.log('Brands récupérés :', data),
      next: data => this.count_voitures= data.totalCars,
      error: err => console.error('Erreur :', err)
    });



    this.voitureService.getBrand$().subscribe({
      // next: data => console.log('Brands récupérés :', data),
      next: data => this.brands= data,
      error: err => console.error('Erreur :', err)
    });

    this.voitureService.gettypeofcars$().subscribe({
      // next: data => console.log('Types of car récupérés :', data),
      next: data => this.typeofcars=data,
      error: err => console.error('Erreur :', err)
    });

    this.service.getServices$().subscribe(
      (data) => {
        this.services = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des packs:', error);
      }

    )

    this.service.getBestServices$().subscribe(
      (data) => {
        this.topService = data;
      },
      (error) => {
        console.error('Erreur lors getBestServices$:', error);
      }
    )

    // stats rdv
    this.rdvService.get_nb_past$().subscribe(
      (data) => {
        this.rdv_past = data.count;
      },
      (error) => {
        console.error('Erreur lors getBestServices$:', error);
      }
    )
    this.rdvService.get_nb_today$().subscribe(
      (data) => {
        this.rdv_today = data.count;
      },
      (error) => {
        console.error('Erreur lors getBestServices$:', error);
      }
    )
    this.rdvService.get_nb_future$().subscribe(
      (data) => {
        this.rdv_futur = data.count;
      },
      (error) => {
        console.error('Erreur lors getBestServices$:', error);
      }
    )



  }

  showDialog_brands() {
    this.visible_brands = true;
  }

  showDialog_typeofcars() {
    this.visible_typeofcars = true;
  }

  showDialog_services(){
    this.visible_services = true;
  }

  showDialog_packs(){
    this.visible_packs = true;
  }


  onSubmit_new_brand(){
    const name =  this.form_new_brand.value;
    this.voitureService.enregistrer_brand$(name).subscribe({
      next : () => {
        this.messageService.showSuccess("Marque enregistrer");
        localStorage.removeItem('brands');
        this.voitureService.getBrand$().subscribe({
          // next: data => console.log('Brands récupérés :', data),
          next: data => this.brands= data,
          error: err => console.error('Erreur :', err)
        });

        this.visible_brands = false
      },
      error: err => console.error('Erreur :', err)
    })
  }

}
