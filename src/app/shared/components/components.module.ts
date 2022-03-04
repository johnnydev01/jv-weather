import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { LoaderComponent } from './loader/loader.component';
import { CitiesTypeaheadComponent } from './cities-typeahead/cities-typeahead.component';
import { FormsModule } from "@angular/forms";
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';

@NgModule({
  imports: [
    CommonModule,
    TypeaheadModule.forRoot(),
    FormsModule
  ],
  declarations: [
    LoaderComponent,
    CitiesTypeaheadComponent,
    DetailedWeatherComponent,
  ],
  exports: [LoaderComponent, CitiesTypeaheadComponent,DetailedWeatherComponent]
})
export class ComponentsModule {
}
