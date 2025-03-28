import {Component, Signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Toast} from 'primeng/toast';
import {Observable} from 'rxjs';
import {LoaderspinnerService} from './services/loaderspinner/loaderspinner.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {ExpiredtokenService} from './services/expiredtoken/expiredtoken.service';
import {Dialog} from 'primeng/dialog';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, Toast, NgIf, AsyncPipe, Dialog, Button, RouterLink]
})


export class AppComponent{
  isLoading$: Observable<boolean>;
  need_reconnexion: Signal<boolean>;

  constructor(private loaderService: LoaderspinnerService , protected expiredtokenservice:ExpiredtokenService) {
    this.isLoading$ = this.loaderService.isLoading$;
    this.need_reconnexion = this.expiredtokenservice._isExpiredTokenSignal;
  }
}
