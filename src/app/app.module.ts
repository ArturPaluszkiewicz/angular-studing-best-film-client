import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './pages/app-routing-module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { YearsComponent } from './pages/years/years.component';
import { MovieInYearsComponent } from './pages/years/movie-in-years/movie-in-years.component';
import { HttpTestComponent } from './pages/http-test/http-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MoviesInCategoryComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieCoverComponent,
    PageNotFoundComponent,
    YearsComponent,
    MovieInYearsComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
