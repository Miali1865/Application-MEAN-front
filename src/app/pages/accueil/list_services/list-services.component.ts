import {Component, OnInit} from '@angular/core';
import {ImgHeaderComponent} from '../../../components/img-header/img-header.component';
import {ServiceService} from '../../../services/service/service.service';
import {ServicesReparation} from '../../../models/services_reparation/services-reparation';
import {ThousandPipe} from '../../../pipes/thousand/thousand.pipe';

@Component({
  selector: 'app-list-pack',
  imports: [
    ImgHeaderComponent,
    ThousandPipe
  ],
  templateUrl: './list-services.component.html',
  standalone: true,
  styleUrl: './list-services.component.css'
})
export class ListServicesComponent implements OnInit{
  services: ServicesReparation[] = [];
  constructor(private service : ServiceService){}

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
  }

}
