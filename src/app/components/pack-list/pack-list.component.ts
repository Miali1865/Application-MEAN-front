import { Component, OnInit } from '@angular/core';
import { PackService } from '../../services/pack.service';
import { CommonModule } from '@angular/common'; // Ajouter cette ligne

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  imports: [CommonModule] // Ajouter CommonModule ici
})
export class PackListComponent implements OnInit {
  packs: any[] = [];

  constructor(private packService: PackService) {}

  ngOnInit(): void {
    this.loadPacks();
  }

  loadPacks(): void {
    this.packService.getPacks().subscribe({
      next: (data) => {
        this.packs = data;
      },
      error: (err) => {
        console.error('Erreur de récupération des packs:', err);
      }
    });
  }
}
