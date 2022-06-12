import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _coursesUrl="http://localhost:4000/api/courses";

  constructor(private _http : HttpClient) { }


  getCourses(){
    return this._http.get<any>(this._coursesUrl);
  }
}
