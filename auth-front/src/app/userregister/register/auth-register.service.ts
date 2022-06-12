
import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {
  private _registerUrl="http://localhost:4000/api/register-user";
  
  constructor(private _http : HttpClient) { }

  registerUser(userData : any){
    return this._http.post<any>(this._registerUrl, userData);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
