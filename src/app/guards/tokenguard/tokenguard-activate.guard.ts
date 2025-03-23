import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {SigninupService} from '../../services/signinup/signinup.service';

export const tokenguardActivateGuard: CanActivateFn = (route, state) => {
  const loginservice=inject(SigninupService);

  const router = inject(Router);
  try{
    if (loginservice.getuserconnected() === null || localStorage.getItem('token') === null){
      console.error("tokenguardChildGuard : user is null");
      router.navigate(['/login']);

    }
  }catch (error){
    console.error("tokenguardChildGuard : "+error);
    router.navigate(['/login']);

  }
  return true;

};
