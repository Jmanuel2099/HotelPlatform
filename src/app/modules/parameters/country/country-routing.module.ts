import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryCreatorComponent } from './country-creator/country-creator.component';
import { CountryEditorComponent } from './country-editor/country-editor.component';
import { CountryListComponent } from './country-list/country-list.component';


const routes: Routes = [
  {
    path: 'creator',
    component: CountryCreatorComponent
  },
  {
    path: 'editor/:id',
    component: CountryEditorComponent
  },
  {
    path: 'List',
    component:CountryListComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'/List'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
