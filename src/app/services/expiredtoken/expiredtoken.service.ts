import {Injectable, Signal ,signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpiredtokenService {
  _isExpiredTokenSignal = signal<boolean>(false);

  constructor() { }

  openReconnectionDialog() {
    console.log("openReconnectionDialog called")
    this._isExpiredTokenSignal.set(true);
  }
  resetExpiredToken() {
    this._isExpiredTokenSignal.set(false);
  }
}
