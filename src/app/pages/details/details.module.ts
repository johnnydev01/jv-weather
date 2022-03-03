import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPage } from './containers/details/details.page';
import { RouterModule } from '@angular/router';
import { DetailsGuard } from './services/details.guard.';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DetailsEffects } from './state/details.effects';
import { detailsReducer } from './state/details.reducer';



@NgModule({
  declarations: [DetailsPage],
  imports: [
    CommonModule,
    StoreModule.forFeature('details', detailsReducer),
    EffectsModule.forFeature([DetailsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: DetailsPage,
        canActivate: [
          DetailsGuard
        ]
      }
    ])
  ],
  providers: [DetailsGuard]
})
export class DetailsModule { }
