import { Component, inject, OnInit } from '@angular/core';
import { ImgHeaderComponent } from '../../../components/img-header/img-header.component';
import { ServiceService } from '../../../services/service/service.service';
import { ServicesReparation } from '../../../models/services_reparation/services-reparation';
import { ThousandPipe } from '../../../pipes/thousand/thousand.pipe';
import { SigninupService } from '../../../services/signinup/signinup.service';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { Voiture } from '../../../models/voiture/voiture';
import { MesVoituresService } from '../../../services/voiture/mes-voitures.service';
import { NgFor, NgIf } from '@angular/common';
import {FullCalendarModule} from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import {RdvService} from '../../../services/rdv/rdv.service';
import {MessagetoastService} from '../../../services/messagetoast/messagetoast.service';

@Component({
  selector: 'app-list-pack',
  imports: [
    ImgHeaderComponent,
    ThousandPipe,
    Button,
    Dialog,
    FullCalendarModule,
    NgIf, NgFor,
  ],
  templateUrl: './list-services.component.html',
  standalone: true,
  styleUrl: './list-services.component.css'
})
export class ListServicesComponent implements OnInit {
  services: ServicesReparation[] = [];
  voitureService = inject(MesVoituresService);
  service = inject(ServiceService);
  rdvService = inject(RdvService);
  messageService=inject(MessagetoastService)
  date_selected: string | null = '';


  service_selected!:ServicesReparation | null;
  voiture_selected!:Voiture | null;
  mes_voitures: Voiture[] = [];

  visible_connexion: boolean = false;
  visible_rdv: boolean = false;

  signinupService = inject(SigninupService)
  user_connected = this.signinupService.getuserconnected()
  id: string | undefined = this.user_connected?.id;

  currentStep = 1;
  steps = ['Voiture', 'Devis', 'Date', 'Confirmer'];

  selectedTime: string = '08:00';

  calendarEvents: any =
    [
    // { title: 'Event 1', start: '2024-09-01', end: '2024-09-11', color: 'yellow' },
    // { title: 'Event 2', date: '2024-09-02' },

    // {
    //   title: 'indisponible', date: '2025-04-04',
    //   backgroundColor: '#f56954', // Couleur de fond rouge
    //   borderColor: '#f56954',     // Couleur de bordure rouge
    //   textColor: '#fff',
    //   diplay: 'block'
    // },

    // {
    //   title: 'BCH237',
    //   start: '2024-08-12T10:30:00',
    //   end: '2024-08-12T11:30:00',
    //   // extendedProps: {
    //   //   department: 'BioChemistry'
    //   // },
    //   // description: 'Lecture'
    //   // , color: 'yellow'
    // },
    // { title: '2', date: '2024-01-01', diplay: 'block' },

  ];


  protected readonly Number = Number;
  totaltempsestimed!: number;
  totalprix!: number;

  ngOnInit() {
    this.service.getServices$().subscribe(
      (data) => {
        console.log('Données récupérées:', data);
        this.services = data;
        console.log(typeof this.services)
      },
      (error) => {
        console.error('Erreur lors du chargement des packs:', error);
      }

    )

    if (this.user_connected) {
      this.fetch_mes_voiture(this.id);
    }
  }

  showDialog_service_selected(i:ServicesReparation) {
    if (this.user_connected) {
      this.visible_rdv = true;
      this.service_selected=i
    } else {
      this.visible_connexion = true;
    }
  }

  fetch_mes_voiture(id: string | undefined) {
    this.voitureService.getMesVoitures$(id).subscribe({
      next: (data) => {
        for (let i = 0; i < data.length; i++) {
          this.mes_voitures.push(
            new Voiture(data[i]._id, this.user_connected, data[i].brand.name, data[i].typeOfCar, data[i].model, data[i].year, data[i].plateNumber)
          )
        }
      },
      error: err => console.error('Erreur :', err)

    }
    )

  }


  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
    if (this.currentStep){
      this.fetch_date_indispo()
    }
    if (this.currentStep ==3){
      this.totaltempsestimed =(Number(this.service_selected?.estimatedTime) * Number(this.voiture_selected?.typeOfCar?.timeCoefficient))
      this.totalprix =(Number(this.service_selected?.basePrice) * Number(this.voiture_selected?.typeOfCar?.priceCoefficient))
    }
  }

  fetch_date_indispo(){
    this.rdvService.getnb_per_rdv$().subscribe({
      next: data => {
        this.calendarEvents = data.appointmentsByDate
          .filter(event => event.title >= 4) // Filtre les événements dont title >= 4
          .map(event => ({
          backgroundColor: '#f56954',
          borderColor: '#f56954',
          date:event.date,
          title:'indisponible'
        }));
      },
      error: err => console.error('Erreur :', err)
    });
  }

  prevStep() {
    if (this.currentStep===3){
      this.date_selected=null
      this.selectedTime='8:00'
    }
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm() {
    if (this.voiture_selected?.id && this.service_selected?.id && this.date_selected && this.selectedTime) {
      this.rdvService.enregistrer_rdv$(
        this.voiture_selected?.id,
        this.service_selected?.id,
        this.date_selected,
        this.selectedTime
      ).subscribe({
        next: () => {
          this.messageService.showSuccess("Rendez-vous enregistrer");
          this.visible_rdv = false;
          this.service_selected = null;
          this.voiture_selected = null;
          this.date_selected = null
          this.currentStep=1;
        },
        error: err => console.error('Erreur :', err)
      })
    }else {
      console.warn("value null")
    }
  }

  select_voiture(i: Voiture) {
    this.voiture_selected=i
  }

  calendarOptions: any = {
    height: 410,
    locale: 'fr',
    dateClick: this.handleDateClick.bind(this), // Fonction de gestion du clic sur une date
    aspectRatio: 1,
    plugins: [
      interactionPlugin,
      dayGridPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: false,
    selectable: false,
    selectMirror: true,
    dayMaxEvents: false,
// Définir la plage de dates navigables
    validRange: {
      start: new Date(), // Empêche de voir les mois précédents
      end: new Date(new Date().setMonth(new Date().getMonth() + 6)) // Limite à 6 mois dans le futur
    }
  };

  handleDateClick(arg: any) {
    if(arg.dateStr != '2025-04-04'){
      this.date_selected = arg.dateStr;

    }
  }
}
