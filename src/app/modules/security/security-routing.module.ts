import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';
import { UnauthenticationRequiredGuard } from 'src/app/helpers/guards/unauthentication-required.guard';


const routes: Routes = [
  {
    path:'Login',
    component: LoginComponent,
    canActivate:[UnauthenticationRequiredGuard]

  },
  {
    path:'Logout',
    component: LogoutComponent,
    canActivate:[AuthenticationRequiredGuard]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/Login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
