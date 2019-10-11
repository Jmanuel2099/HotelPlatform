import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityEditorComponent } from './city-editor/city-editor.component';
import { CityCreatorComponent } from './city-creator/city-creator.component';
import { CityListComponent } from './city-list/city-list.component';


@NgModule({
  declarations: [CityEditorComponent, CityCreatorComponent, CityListComponent],
  imports: [
    CommonModule,
    CityRoutingModule
  ]
})
export class CityModule { }
