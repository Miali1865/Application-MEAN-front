import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bienvenue',
  imports: [CommonModule],
  templateUrl: './bienvenue.component.html',
  standalone: true,
  styleUrl: './bienvenue.component.css'
})
export class BienvenueComponent implements OnInit {

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.updateTitle();
  }

  updateTitle() {
    const path = window.location.pathname;
    let pageTitle = '';

    if (path.includes('contact')) {
      pageTitle = 'Contact';
    } else if (path.includes('bienvenue')) {
      pageTitle = 'Bienvenue';
    } else if (path.includes('about')) {
      pageTitle = 'À propos';
    } else if (path === '/') {
      pageTitle = 'Page d\'accueil';
    }

    this.titleService.setTitle(`${pageTitle} - MEKANIKS`);
  }


}
