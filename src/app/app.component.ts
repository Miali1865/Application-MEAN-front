import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet]
})


export class AppComponent implements OnInit {

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