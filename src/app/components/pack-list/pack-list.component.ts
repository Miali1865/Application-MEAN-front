import { Component, OnInit } from '@angular/core';
import { PackService } from '../../services/pack.service';

@Component({
  standalone: true,
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackListComponent implements OnInit {
  packs: any[] = [];

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
