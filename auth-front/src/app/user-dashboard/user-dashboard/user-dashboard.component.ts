import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../userlogin/login/auth.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  courses = {};
  
  
  constructor(public _authService: AuthService, private _router : Router) { }

  ngOnInit(): void {
    this._authService.getCourses().subscribe(courses => {
      this.courses= courses,
        (err: {status: number; }) =>{
        if(err instanceof HttpErrorResponse){
          if (err.status ===401){
            this._router.navigate(['/user-login'])
          }
        }
      }
    })
  }
}
