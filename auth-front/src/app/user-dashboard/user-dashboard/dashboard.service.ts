import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _coursesUrl="http://localhost:4000/api/courses";

  constructor(private _http : HttpClient, private _router: Router) { }


  getCourses(){
    return this._http.get<any>(this._coursesUrl);
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
