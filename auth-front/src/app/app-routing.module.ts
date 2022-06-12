import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout/logout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';
import { LoginComponent } from './userlogin/login/login.component';
import { RegisterComponent } from './userregister/register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/" ,
    pathMatch: 'full' 
  },

  {
    path:"register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "user-dashboard",
    component: UserDashboardComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
