import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup} from '@angular/forms'
import{ AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message = {};
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
  }

  UserLogInData = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  loginUser(){
    this._auth.registerUser(this.UserLogInData.value)
    .subscribe(data => {
      if(data.status===400){
        this.message= data.error;
      }else{
        localStorage.setItem('token',data.token);
        this._router.navigate(['/user-dashboard'])
        console.log(data)
      }
      
    })
  }
}
