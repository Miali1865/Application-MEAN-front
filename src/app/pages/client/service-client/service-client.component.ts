import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImgHeaderComponent} from '../../../components/img-header/img-header.component';
import * as echarts from 'echarts';
import {DatePipe, NgClass, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-service-client',
  imports: [
    ImgHeaderComponent,
    DatePipe,
    NgForOf,
    NgClass,
    FormsModule
  ],
  templateUrl: './service-client.component.html',
  standalone: true,
  styleUrl: './service-client.component.css'
})
export class ServiceClientComponent implements OnInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
// Données originales
  originalData: any[] = [
    { id: 1, dateHeure: new Date('2023-05-15T09:00'), nomService: 'Vidange', mecanicien: 'Dupont', statut: 'Terminé' , voiture: 'Porche 911' },
    { id: 2, dateHeure: new Date('2023-05-16T10:30'), nomService: 'Pneumatiques', mecanicien: 'Martin', statut: 'En cours' , voiture: 'Porche 911' },
    // Ajoutez plus de données selon vos besoins
  ];

  // Données filtrées
  filteredData: any[] = [];

  // Filtres
  idFilter: string = '';
  dateFilter: string = '';
  serviceFilter: string = '';
  mecanicienFilter: string = '';
  statutFilter: string = '';

  // Liste des options pour les selects
  services: string[] = ['Vidange', 'Pneumatiques', 'Freinage', 'Moteur'];
  mecaniciens: string[] = ['Dupont', 'Martin', 'Durand', 'Lefebvre'];
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  applyFilter() {
    this.filteredData = this.originalData.filter(item => {
      return (
        (this.idFilter === '' || item.id.toString().includes(this.idFilter)) &&
        (this.dateFilter === '' ||
          new Date(item.dateHeure).toISOString().slice(0, 16) === this.dateFilter) &&
        (this.serviceFilter === '' || item.nomService === this.serviceFilter) &&
        (this.mecanicienFilter === '' || item.mecanicien === this.mecanicienFilter) &&
        (this.statutFilter === '' || item.statut === this.statutFilter)
      );
    });
    this.currentPage = 1; // Reset à la première page après filtrage
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = this.chartContainer.nativeElement;
    const myChart = echarts.init(chartDom, );

    const option = {

      tooltip: {
        trigger: 'item'
      },
      color: ['#93c5fd', '#28a745', 'yellow'], // Gris, Vert, Bleu
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Passee' },
            { value: 735, name: 'En ours' },
            { value: 580, name: 'A venir' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    myChart.setOption(option);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredData.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  ngOnInit(): void {
  }

  protected readonly Math = Math;
}
