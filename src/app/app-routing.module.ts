import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { AuthenticationRequiredGuard } from './helpers/guards/authentication-required.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/home'
  },
  {
    path:'security',
    loadChildren: './modules/security/security.module#SecurityModule',
    canActivateChild:[]
  },
  {
    path:'country',
    loadChildren: './modules/parameters/country/country.module#CountryModule',
    canActivate:[AuthenticationRequiredGuard]
  },
  {
    path:'city',
    loadChildren: './modules/parameters/city/city.module#CityModule',
    canActivate:[AuthenticationRequiredGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
