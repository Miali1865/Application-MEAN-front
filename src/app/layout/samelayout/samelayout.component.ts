import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-samelayout',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet

  ],
  templateUrl: './samelayout.component.html',
  standalone: true,
  styleUrl: './samelayout.component.css'
})
export class SamelayoutComponent {

}
