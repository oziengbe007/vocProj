import { Component } from '@angular/core';
import { AuthService } from './userlogin/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-front';


  constructor(public _authService: AuthService){}


  
}
