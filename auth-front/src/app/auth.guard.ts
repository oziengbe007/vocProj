import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import {AuthService} from './userlogin/login/auth.service';
import {AuthRegisterService} from './userregister/register/auth-register.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _loginAuth: AuthService, private _regAuth:AuthRegisterService, private _router: Router){}


  canActivate(): boolean{
    if (this._loginAuth.loggedIn()){
      return true;
    }else{
      this._router.navigate(['/user-login'])
      return false;
    }
  }

  
  
}
