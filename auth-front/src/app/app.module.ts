import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { loginComponent } from './login/userlogin/userlogin.component';
import { LoginComponent } from './userlogin/login/login.component';
import { RegisterComponent } from './userregister/register/register.component';
import { LogoutComponent } from './logout/logout/logout.component';
import{ HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' ;
import {ReactiveFormsModule} from '@angular/forms';
// import {AuthserviceService} from '';
import{AuthService} from './userlogin/login/auth.service';
import{AuthRegisterService} from './userregister/register/auth-register.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';
import { AuthGuard } from './auth.guard';
import {AuthInterceptor} from './token-interceptor.service';
import { GenServiceService } from './gen-service.service';
import { CoursesComponent } from './courses/courses/courses.component';
import {DashboardService} from './user-dashboard/user-dashboard/dashboard.service';
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component';
import { UserAdminPanelComponent } from './user-admin-panel/user-admin-panel/user-admin-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    UserDashboardComponent,
    CoursesComponent,
    UserProfileComponent,
    UserAdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [AuthService, AuthRegisterService, AuthGuard,DashboardService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },GenServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
