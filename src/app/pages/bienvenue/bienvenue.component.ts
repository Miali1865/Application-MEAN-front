import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PackService} from '../../services/services/pack.service';

@Component({
  selector: 'app-bienvenue',
  imports: [CommonModule],
  templateUrl: './bienvenue.component.html',
  standalone: true,
  styleUrl: './bienvenue.component.css'
})
export class BienvenueComponent implements OnInit {
  packs!: any[];

  constructor(private packService: PackService) {}

  ngOnInit(): void {
    this.fetchPacks();
  }

  fetchPacks(): void {
    this.packService.getPacks().subscribe(
      (data) => {
        console.log('Données récupérées:', data);
        this.packs = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des packs:', error);
      }
    );
  }



}
