import {Component, inject, OnInit} from '@angular/core';
import {TitleDescriptionComponent} from '../../../components/title-description/title-description.component';
import {SigninupService} from '../../../services/signinup/signinup.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {MessagetoastService} from '../../../services/messagetoast/messagetoast.service';

@Component({
  selector: 'app-all-mecaniciens',
  imports: [
    TitleDescriptionComponent,
    ReactiveFormsModule
  ],
  templateUrl: './all-mecaniciens.component.html',
  standalone: true,
  styleUrl: './all-mecaniciens.component.css'
})
export class AllMecaniciensComponent implements OnInit{
  signinupService=inject(SigninupService) ;
  formBuilder=inject(FormBuilder) ;
  messagetoastService=inject(MessagetoastService) ;
  mecaniciens :any[] = []
  inscriptionForm!: FormGroup;



  ngOnInit(): void {

    this.signinupService.getMecanicien$().subscribe({
      // next: data => console.log('Brands récupérés :', data),
      next: data => this.mecaniciens= data.mechanics,
      error: err => console.error('Erreur :', err)
    });

    this.inscriptionForm = this.formBuilder.group({
      // Empêcher les caractères spéciaux (ex: ' " ! @ #)
      name: ['', [Validators.required, Validators.minLength(3), this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3), this.noWhitespaceValidator,]],
      password: ['', [Validators.required, Validators.minLength(3), this.noWhitespaceValidator]]
    });

  }

  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    // if (value.trim().length === value.length && value!='') {
    //   return { whitespace: true }; // Retourne une erreur si le champ est vide après suppression des espaces
    // }
    // console.log( value.length +" "+value.split(' ').length+" "+'-1')
    if (value.length == value.split(' ').length-1){
      return { whitespace: true };
    }
    return null;
  }

  onSubmit() {
    const {
      email,
      password,
      name
    } = this.inscriptionForm.value;
    this.signinupService.add_mecanicien(name.trim(),password,email.trim()).subscribe(
      {
        next:result=>{
          this.messagetoastService.showSuccess("Insertion reussit")
          localStorage.removeItem('mecaniciens')
          this.signinupService.getMecanicien$().subscribe({
            // next: data => console.log('Brands récupérés :', data),
            next: data => this.mecaniciens= data.mechanics,
            error: err => console.error('Erreur :', err)
          });

        }
      }
    )
  }

  get email() {
    return this.inscriptionForm.get('email');
  }

  get password() {
    return this.inscriptionForm.get('password');
  }

  get name() {
    return this.inscriptionForm.get('name');
  }

}
