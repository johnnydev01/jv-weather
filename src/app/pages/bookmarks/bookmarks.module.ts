import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './bookmarks.page';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BookmarksPage
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    RouterModule
  ]
})
export class BookmarksModule { }
