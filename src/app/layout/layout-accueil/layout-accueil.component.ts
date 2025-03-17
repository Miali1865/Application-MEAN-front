import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout-accueil',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet

  ],
  templateUrl: './layout-accueil.component.html',
  standalone: true,
  styleUrl: './layout-accueil.component.css'
})
export class LayoutAccueilComponent {

}
