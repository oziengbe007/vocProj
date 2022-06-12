
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import{ AuthRegisterService } from './auth-register.service'
import{HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public message = {};
  
  constructor(private _auth : AuthRegisterService) { }

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
      if(data.status===400){
        this.message= data.error;
      }else{
        localStorage.setItem('token', data.token)
        console.log(data)
      }
      
    })
  }
}
//i still need to implement displaying error messages to the front end