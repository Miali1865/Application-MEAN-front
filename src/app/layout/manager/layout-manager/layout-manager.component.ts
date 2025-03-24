import { Component } from '@angular/core';
import {HeaderManagerComponent} from '../header-manager/header-manager.component';
import {FooterComponent} from '../../footer/footer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout-manager',
  imports: [
    HeaderManagerComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './layout-manager.component.html',
  standalone: true,
  styleUrl: './layout-manager.component.css'
})
export class LayoutManagerComponent {

}
