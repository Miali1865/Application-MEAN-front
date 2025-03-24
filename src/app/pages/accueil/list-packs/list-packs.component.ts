import {Component, OnInit} from '@angular/core';
import {ImgHeaderComponent} from '../../../components/img-header/img-header.component';
import {PackService} from '../../../services/services/pack.service';
import {Pack} from '../../../models/pack/pack';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-packs',
  imports: [
    ImgHeaderComponent
  ],
  templateUrl: './list-packs.component.html',
  standalone: true,
  styleUrl: './list-packs.component.css'
})
export class ListPacksComponent implements OnInit{
  packs: Pack[] =[];
  constructor(private packService: PackService) {}

  ngOnInit(): void {
    // this.fetchPacks();

    Pack.getAll_name_description$(this.packService).subscribe(
      (data) => {
        console.log('Données récupérées:', data);
        this.packs = data;
        console.log(typeof this.packs)
      },
      (error) => {
        console.error('Erreur lors du chargement des packs:', error);
      }
    );

    // this.packs = Pack.getAll(this.packService,this.packs)
    // console.log(typeof this.packs)
  }


  // fetchPacks(): void {
  //   this.packService.getPacks().subscribe(
  //     (data) => {
  //       console.log('Données récupérées:', data);
  //       this.packs = data;
  //     },
  //     (error) => {
  //       console.error('Erreur lors du chargement des packs:', error);
  //     }
  //   );
  // }

}
