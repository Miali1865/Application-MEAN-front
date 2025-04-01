import {Component, OnInit} from '@angular/core';
import {ImgHeaderComponent} from '../../../components/img-header/img-header.component';
import {PackService} from '../../../services/pack/pack.service';
import {Pack} from '../../../models/pack/pack';
import {Dialog} from 'primeng/dialog';
import {Button} from 'primeng/button';
import {TitleDescriptionComponent} from '../../../components/title-description/title-description.component';

@Component({
  selector: 'app-list-packs',
  imports: [
    ImgHeaderComponent,
    Dialog,
    Button,
    TitleDescriptionComponent,
  ],
  templateUrl: './list-packs.component.html',
  standalone: true,
  styleUrl: './list-packs.component.css'
})
export class ListPacksComponent implements OnInit{
  packs: Pack[]=[];
  visible: boolean = false;
  pack_selected:Pack | null=null
  constructor(private packService: PackService) {}

  ngOnInit(): void {
    this.packService.getPacks$().subscribe(
      (data) => {
        console.log('Données récupérées:', data);
        this.packs = data;
        console.log(typeof this.packs)
      },
      (error) => {
        console.error('Erreur lors du chargement des packs:', error);
      }
    );

  }

  showDialog(i:Pack) {
    if (i.services == null){
      i.fetchservices(this.packService)
      console.log("fetchservices")
    }
    this.pack_selected=i;
    this.visible = true;
  }


}
