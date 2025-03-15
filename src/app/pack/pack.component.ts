// import { Component, OnInit } from '@angular/core';
// import { PackService } from '../services/pack.service';

// @Component({
//   selector: 'app-pack',
//   templateUrl: './pack.component.html',
//   styleUrl: './pack.component.css'
// })
// export class PackComponent implements OnInit {
//   packs: any[] = [];

//   constructor(private packService: PackService) {}

//   ngOnInit(): void {
//     this.fetchPacks();
//   }

//   fetchPacks(): void {
//     this.packService.getPacks().subscribe(
//       (data) => {  // Quand les données arrivent (succès)
//         console.log('Données récupérées:', data);  // Affiche les données dans la console
//         this.packs = data;
//       },
//       (error) => {  // Si une erreur survient (échec)
//         console.error('Erreur lors du chargement des packs:', error);
//       }
//     );
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-pack',
  imports: [],
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.css'
})
export class PackComponent {
}