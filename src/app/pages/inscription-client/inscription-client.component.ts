import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
    private signinupService: SigninupService,
    private formBuilder: FormBuilder,
    private messagetoastService: MessagetoastService,
  ) {
  }

  ngOnInit() {
    this.signinupService.removeUserlocalStorage()

    this.inscriptionForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  onSubmit() {
    const {
      email,
      password,
      name
    } = this.inscriptionForm.value;
    this.signinupService.inscription
  }
}
