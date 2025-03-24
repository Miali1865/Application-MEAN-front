import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SigninupService} from '../../services/signinup/signinup.service';
import {OverlayBadge} from 'primeng/overlaybadge';
import {Avatar} from 'primeng/avatar';
import {User} from '../../models/user/user';
import {NgIf} from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterLink,
    OverlayBadge,
    Avatar,
    NgIf
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  useconnected!:User|null;
  isOpen = false;

  constructor(
    public signinupService: SigninupService,

  ) {
  }

  ngOnInit() {
   this.useconnected= this.signinupService.getuserconnected()
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

}
