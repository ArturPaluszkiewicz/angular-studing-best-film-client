import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MoviesInCategoryComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieCoverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
