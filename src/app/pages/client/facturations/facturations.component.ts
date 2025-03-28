import {Component, OnInit} from '@angular/core';
import {ImgHeaderComponent} from '../../../components/img-header/img-header.component';

@Component({
  selector: 'app-facturations',
  imports: [
    ImgHeaderComponent,
  ],
  templateUrl: './facturations.component.html',
  standalone: true,
  styleUrl: './facturations.component.css'
})
export class FacturationsComponent implements OnInit {
  mes_factures = []

  // todo : miandry api sy class back atsona
  ngOnInit(): void {

  }

}
