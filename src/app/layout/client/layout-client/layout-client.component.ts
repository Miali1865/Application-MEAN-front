import { Component } from '@angular/core';
import {HeaderClientComponent} from '../header-client/header-client.component';
import {FooterComponent} from '../../footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout-client',
  imports: [
    HeaderClientComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './layout-client.component.html',
  styleUrl: './layout-client.component.css'
})
export class LayoutClientComponent {

}
