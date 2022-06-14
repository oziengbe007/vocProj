
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import{ AuthRegisterService } from './auth-register.service'
import{HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public message = {};
  
  constructor(private _auth : AuthRegisterService, private _router:Router) { }

  ngOnInit(): void {
  }
  registerUserData= new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
  })


  registerUser(){
    this._auth.registerUser(this.registerUserData.value)
    .subscribe(data => {
      if(data.status===404){
        this.message= data.error;
      }else{
        localStorage.setItem('token', data.token)
        this._router.navigate(['/login']);
        this.message = "Successfully regiestered"
      }
      
    })
  }
}
//i still need to implement displaying error messages to the front end