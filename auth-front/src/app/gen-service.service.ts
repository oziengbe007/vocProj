import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GenServiceService {

  private _registerUrl="http://localhost:4000/api/courses";

  constructor(private _http : HttpClient) { }


  getCourses(courses : any){
    return this._http.get<any>(this._registerUrl, courses);
  }

  // getUser(id : number){
  //   return this._http.get<any>(this._registerUrl, id);
  // }
}




