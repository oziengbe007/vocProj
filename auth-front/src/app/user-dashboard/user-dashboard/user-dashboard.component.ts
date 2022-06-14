import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../userlogin/login/auth.service';
import { CourseService } from 'src/app/courses/courses/course.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public courses:any[]= [];
  
  public display = true;
  
  constructor(public _authService: AuthService, private _router : Router, private _courseService: CourseService ) { }

  ngOnInit(): void {
    this.courses = this._courseService.getCourses();
  }

 
}
