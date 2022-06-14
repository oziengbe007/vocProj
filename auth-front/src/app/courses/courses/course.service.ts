import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/userlogin/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public _coursesUrl = [];
  
  constructor(private _authService : AuthService, private _http : HttpClient) { }

  getCourses(){
    return [
      {"id" : 1, "Title": "Testing 123", "description":"a blog post", "body": "the post i about what is going on in this life"},
      {"id" : 2, "Title": "Testing 123", "description":"a blog post", "body": "the post i about what is going on in this life"},
      {"id" : 3, "Title": "Testing 123", "description":"a blog post", "body": "the post i about what is going on in this life"},
      {"id" : 4, "Title": "Testing 123", "description":"a blog post", "body": "the post i about what is going on in this life"},
      {"id" : 5, "Title": "Testing 123", "description":"a blog post", "body": "the post i about what is going on in this life"},
      {"id" : 6, "Title": "Testing 123", "description":"a blog post", "body": "the post i about what is going on in this life"},
      {"id" : 7, "Title": "Testing 123", "description":"a blog post", "body": "the post i about what is going on in this life"},
      {"id" : 8, "Title": "Testing 123", "description":"a blog post", "body": "the post i about what is going on in this life"},
    ]
  }
}

