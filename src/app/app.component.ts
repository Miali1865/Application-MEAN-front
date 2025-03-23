import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toast} from 'primeng/toast';
import {Observable} from 'rxjs';
import {LoaderspinnerService} from './services/loaderspinner/loaderspinner.service';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, Toast, NgIf, AsyncPipe]
})


export class AppComponent{
  isLoading$: Observable<boolean>;

  constructor(private loaderService: LoaderspinnerService) {
    this.isLoading$ = this.loaderService.isLoading$;
  }
}
