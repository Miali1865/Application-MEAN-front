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

  service_selected!:ServicesReparation | null;
  voiture_selected!:Voiture | null;
  mes_voitures: Voiture[] = [];

  visible_connexion: boolean = false;
  visible_rdv: boolean = false;

  signinupService = inject(SigninupService)
  user_connected = this.signinupService.getuserconnected()
  id: string | undefined = this.user_connected?.id;

  protected readonly Number = Number;

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

  showDialog(i:ServicesReparation) {
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

  currentStep = 1;
  steps = ['Voiture', 'Devis', 'Date', 'Confirmer'];

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm() {
    // if (this.signupForm.valid) {
    //   console.log('Form submitted:', this.signupForm.value);
    //   this.nextStep(); // Aller à l'étape "Done"
    // }
  }

  select_service(i: ServicesReparation) {
    this.service_selected=i
  }

  select_voiture(i: Voiture) {
    this.voiture_selected=i
  }

  calendarOptions: any = {
    // contentHeight: 100,
    height: 450,
    // firstDay: 1,
    locale: 'fr',
    // multiMonthMaxColumns: 1,
    // initialView: 'multiMonthYear', // Vue initiale
    // plugins: [interactionPlugin, multiMonthPlugin,bootstrap5Plugin ],
    // themeSystem: 'bootstrap5',

    // // ny event
    dateClick: this.handleDateClick.bind(this), // Fonction de gestion du clic sur une date
    // eventClick: this.handleEventClick.bind(this),
    // // prevYear: this.handelPrevYearClick.bind(this),

    // headerToolbar: {
    //   left: '',
    //   center: 'title',
    //   //   right: 'dayGridMonth,timeGridWeek,timeGridDay'
    // },
    //
    // eventDidMount: function (info: any) {
    //   // Ajouter un tooltip à l'événement
    //   info.el.setAttribute('title', info.event.extendedProps.description);
    // },
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
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,

  };

  handleDateClick(arg: any) {
  }
}
