import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { CitiesTypeaheadComponent } from './cities-typeahead/cities-typeahead.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoaderComponent,
    CitiesTypeaheadComponent,
  ],
  exports: [LoaderComponent]
})
export class ComponentsModule {
}
