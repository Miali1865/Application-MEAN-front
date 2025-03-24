import { Component } from '@angular/core';
import {ImgHeaderComponent} from '../../../components/img-header/img-header.component';

@Component({
  selector: 'app-list-services',
  imports: [
    ImgHeaderComponent
  ],
  templateUrl: './list-services.component.html',
  standalone: true,
  styleUrl: './list-services.component.css'
})
export class ListServicesComponent {
  services: any;

}
