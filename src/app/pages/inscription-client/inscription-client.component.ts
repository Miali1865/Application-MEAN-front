import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {SigninupService} from '../../services/signinup/signinup.service';
import {MessagetoastService} from '../../services/messagetoast/messagetoast.service';

@Component({
  selector: 'app-inscription-client',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './inscription-client.component.html',
  styleUrl: '../login/login.component.css',
  standalone:true

})
export class InscriptionClientComponent implements OnInit {
  inscriptionForm!: FormGroup;

  constructor(
    public signinupService: SigninupService,
    private formBuilder: FormBuilder,
    private messagetoastService: MessagetoastService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.signinupService.removeUserlocalStorage()

    this.inscriptionForm = this.formBuilder.group({
      // Empêcher les caractères spéciaux (ex: ' " ! @ #)
      name: ['', [Validators.required, Validators.minLength(3),this.noWhitespaceValidator,Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3), this.noWhitespaceValidator,]],
      password: ['', [Validators.required, Validators.minLength(3), this.noWhitespaceValidator ]]
    });

    console.log("name")
    console.error(this.name?.errors)
    console.log("email")
    console.error(this.email?.errors)
    console.log("password")
    console.error(this.password?.errors)
  }

  onSubmit() {
    const {
      email,
      password,
      name
    } = this.inscriptionForm.value;
    this.signinupService.inscription(name.trim(),password,email.trim()).subscribe(
      {
        next:result=>{
          console.log('Login réussi:', result);
          this.messagetoastService.showSuccess("Connnection reussit")
          const userconnected = this.signinupService.getuserconnected();
          if (userconnected?.role =="client"){
            this.router.navigate(['accueil/']);
          }else{
            this.messagetoastService.showError("role undefined")
            console.error("role undefined "+userconnected?.role)
          }
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
}
