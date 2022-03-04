import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { BookmarksEffects } from './state/bookmarks.effects';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { BookmarksPage } from './containers/bookmarks.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookmarksPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    EffectsModule.forFeature([BookmarksEffects]),
    RouterModule
  ]
})
export class BookmarksModule { }
