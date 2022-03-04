import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { homeReducer } from './state/home.reducer';
import { EffectsModule } from '@ngrx/effects';

import { HomePage } from './containers/home/home.page';
import { HomeEffects } from './state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DetailedWeatherComponent } from '../../shared/components/detailed-weather/detailed-weather.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomePage,
    CurrentWeatherComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
    RouterModule,
  ]
})
export class HomeModule { }
