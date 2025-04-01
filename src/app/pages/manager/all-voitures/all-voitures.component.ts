import {Component, inject, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {Voiture} from '../../../models/voiture/voiture';
import {MesVoituresService} from '../../../services/voiture/mes-voitures.service';
import {User} from '../../../models/user/user';
import {TitleDescriptionComponent} from '../../../components/title-description/title-description.component';

@Component({
  selector: 'app-all-voitures',
  imports: [
    Button,
    Dialog,
    TitleDescriptionComponent
  ],
  templateUrl: './all-voitures.component.html',
  standalone: true,
  styleUrl: './all-voitures.component.css'
})
export class AllVoituresComponent implements OnInit {
  all_voitures:Voiture[] =[];
  visible_historique: boolean = false;
  voiture_selected:Voiture | null =null;
  voitureService = inject(MesVoituresService)

  ngOnInit() {

    this.fetch_all_voiture();

  }

  fetch_all_voiture() {
    this.voitureService.getAllVoitures$().subscribe({
        next: (data) => {
          for (let i=0 ; i<data.length ; i++) {
            this.all_voitures.push(
              new Voiture(data[i]._id,
                new User(data[i].client._id,data[i].client.name,null,data[i].client.role),
                data[i].brand,data[i].typeOfCar,data[i].model,data[i].year,data[i].plateNumber)
            )
          }
        },
        error: err => console.error('Erreur :', err)
      }
    )
  }


  showDialog_historique(i:Voiture) {
    this.visible_historique = true;
    this.voiture_selected=i;
  }
}
