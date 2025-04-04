import {Component, inject, OnInit} from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import {Dialog} from 'primeng/dialog';
import {DatePipe} from '@angular/common';
import {SigninupService} from '../../../services/signinup/signinup.service';
import {User} from '../../../models/user/user';
import {RdvService} from '../../../services/rdv/rdv.service';
import {Dictionary} from '@fullcalendar/core/internal';
@Component({
  selector: 'app-calendrier',
  imports: [
    FullCalendarModule,
    Dialog,
    DatePipe,
  ],
  templateUrl: './calendrier.component.html',
  standalone: true,
  styleUrl: './calendrier.component.css'
})
export class CalendrierComponent implements OnInit {

  visible_event: boolean = false;
  date_selected_event: string | null = '';
  date_selected_event_title: string | null = '';
  signinupService = inject(SigninupService)
  useconnected!:User|null;
  rdvService = inject(RdvService);
  rdv_selected:any[]=[]

  ngOnInit() {
    this.useconnected= this.signinupService.getuserconnected()
    this.fetch_rdv_vaovao()
  }
  calendarEvents: any[] =
    [
    // { title: 'Event 1', start: '2024-09-01', end: '2024-09-11', color: 'yellow' },
    // { title: 'Event 2', date: '2024-09-02' },
    // {
    //   title: '8', date: '2024-01-02',
    //   backgroundColor: '#f56954', // Couleur de fond rouge
    //   borderColor: '#f56954',     // Couleur de bordure rouge
    //   textColor: '#fff'
    // },
    // {
    //   title: 'BCH237',
    //   start: '2025-04-12T10:30:00',
    //   end: '2025-04-12T11:30:00',
    //   // extendedProps: {
    //   //   department: 'BioChemistry'
    //   // },
    //   // description: 'Lecture'
    //   // , color: 'yellow'
    // },
    // { title: '2', date: '2024-01-01', diplay: 'block' },

  ];

  fetch_rdv_vaovao(){
    this.rdvService.getrdv_and_detail$().subscribe(
      {
        next: data => {
          this.calendarEvents = data.appointmentsByDate
            .map((i) => (
              {
              backgroundColor: '#3899e8',
              borderColor: '#ffffff',
              date:i.date,
              title:i.timeSlots.length,
              timeSlots:i.timeSlots
            }));
        },
        error: err => console.error('Erreur :', err)
      }
    )
  }

  handleEventClick(info: any) {
    this.visible_event = true;
    this.date_selected_event = info.event.start;
    this.date_selected_event_title = info.event.title;
    this.rdv_selected=info.event._def.extendedProps.timeSlots
    console.log(this.rdv_selected)
  }



  calendarOptions: any = {
    // contentHeight: 100,
    height: 700,
    // firstDay: 1,
    locale: 'fr',
    // multiMonthMaxColumns: 1,
    // initialView: 'multiMonthYear', // Vue initiale
    // plugins: [interactionPlugin, multiMonthPlugin,bootstrap5Plugin ],
    // themeSystem: 'bootstrap5',

    // // ny event
    // // dateClick: this.handleDateClick.bind(this), // Fonction de gestion du clic sur une date
    eventClick: this.handleEventClick.bind(this),
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
    aspectRatio: 2.5,
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: false,
    selectable: false,
    selectMirror: true,
    dayMaxEvents: false,
// Définir la plage de dates navigables
    validRange: {
      end: new Date(new Date().setMonth(new Date().getMonth() + 6)) // Limite à 6 mois dans le futur
    }

  };





}
