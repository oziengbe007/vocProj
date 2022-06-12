import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import  {DashboardService} from './dashboard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  courses = {};
  
  
  constructor(private _dashboardService: DashboardService, private _router : Router) { }

  ngOnInit(): void {
    this._dashboardService.getCourses().subscribe(courses => {
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
