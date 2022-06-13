import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl="http://localhost:4000/api/login-user";
  private _courses = "http://localhost:4000/api/courses";
  constructor(private http: HttpClient, private _router : Router) { }

  registerUser(user: any){
   return this.http.post<any>(this._loginUrl, user)
  }
  getCourses(){
    return this.http.get<any>(this._courses);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }

}
