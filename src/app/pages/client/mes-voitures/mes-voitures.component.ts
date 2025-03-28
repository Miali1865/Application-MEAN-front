import {Component, inject, OnInit} from '@angular/core';
import {Voiture} from '../../../models/voiture/voiture';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {ImgHeaderComponent} from '../../../components/img-header/img-header.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MesVoituresService} from '../../../services/voiture/mes-voitures.service';
import {SigninupService} from '../../../services/signinup/signinup.service';
import {MessagetoastService} from '../../../services/messagetoast/messagetoast.service';

@Component({
  selector: 'app-voiture',
  imports: [
    Button,
    Dialog,
    InputText,
    ImgHeaderComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './mes-voitures.component.html',
  standalone: true,
  styleUrl: './mes-voitures.component.css'
})
export class MesVoituresComponent implements OnInit {
  mes_voitures:Voiture[] =[];
  visible: boolean = false;
  visible_historique: boolean = false;
  voiture_selected:Voiture | null =null;
  brands:any = [];
  typeofcars!:any;

  signinupService=inject(SigninupService)
  voitureService = inject(MesVoituresService)
  messageService = inject(MessagetoastService)
  user_connected = this.signinupService.getuserconnected()
  id:string | undefined = this.user_connected?.id;

  form: FormGroup = new FormGroup({
    brand: new FormControl('',[Validators.required]),
    typeOfCar: new FormControl('', [Validators.required]),
    model: new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.required]),
    plateNumber: new FormControl('',[Validators.required])
  });

  ngOnInit() {

    this.voitureService.getBrand$().subscribe({
      // next: data => console.log('Brands récupérés :', data),
      next: data => this.brands= data,
      error: err => console.error('Erreur :', err)
    });

    this.voitureService.gettypeofcars$().subscribe({
      // next: data => console.log('Types of car récupérés :', data),
      next: data => this.typeofcars=data,
      error: err => console.error('Erreur :', err)
    });


    this.fetch_mes_voiture(this.id);

  }

  fetch_mes_voiture(id: string | undefined) {
    this.voitureService.getMesVoitures$(id).subscribe({
        next: (data) => {
          for (let i=0 ; i<data.length ; i++) {
            this.mes_voitures.push(
              new Voiture(data[i]._id,this.user_connected,data[i].brand,data[i].typeOfCar,data[i].model,data[i].year,data[i].plateNumber)
            )
          }
        },
        error: err => console.error('Erreur :', err)

      }
    )

  }


  showDialog() {
    this.visible = true;
  }
  showDialog_historique(i:Voiture) {
    this.visible_historique = true;
    this.voiture_selected=i;
  }


  onSubmit() {
    const {
      brand,
      typeOfCar,
      model,
      year,
      plateNumber,
    } = this.form.value;
    const client =this.id;

    this.voitureService.enregistrer_voiture$(
      {
        client,
        brand,
        typeOfCar,
        model,
        year,
        plateNumber,
      }
    ).subscribe({
      next : () => {
        this.messageService.showSuccess("voiture enregistrer");
        this.visible = false
      },
      error: err => console.error('Erreur :', err)
    })

  }
}
