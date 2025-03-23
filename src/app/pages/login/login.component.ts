import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SigninupService} from '../../services/signinup/signinup.service';
import {MessagetoastService} from '../../services/messagetoast/messagetoast.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:true
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signinupService: SigninupService,
    private messagetoastService: MessagetoastService,
    private router: Router
  ) {

  }

  ngOnInit() {

    this.signinupService.removeUserlocalStorage()

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const {
      email,
      password
    } = this.loginForm.value;
    this.signinupService.login$({email, password}).subscribe(
      {
        next: result => {
          console.log('Login réussi:', result);
          this.messagetoastService.showSuccess("Connnection reussit")
          const userconnected = this.signinupService.getuserconnected()
          if (userconnected ){
            if (userconnected.role =="manager"){
              this.router.navigate(['manager/']);
            }else if (userconnected.role =="mecanicien"){
              this.router.navigate(['manager/']);
            }else if (userconnected.role =="client"){
              this.router.navigate(['accueil/']);
            }else {
              this.messagetoastService.showError("role undefined")
            }
          }
        },
        error: error => {
          console.error('Erreur lors du login:', error);
          console.error(error);
          // this.showError(error.error.message);
          this.messagetoastService.showError(error.error.message)
        }
      }

    )

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
