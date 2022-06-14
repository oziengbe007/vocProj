import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/userlogin/login/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CourseService } from './course.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
public courses : any[] =[];
  constructor(private _courseService: CourseService, private _router: Router) { }

  ngOnInit(): void {
  }
  displayCourses(){
    this.courses = this._courseService.getCourses()
  } 
}
