import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthService } from './userlogin/login/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector : Injector) { }

  intercept(req : any, next : any){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeader: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
