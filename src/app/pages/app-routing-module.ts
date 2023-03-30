import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CategoriesComponent } from './categories/categories.component'
import { MoviesInCategoryComponent } from './categories/movies-in-category/movies-in-category.component'
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component'
import { MoviesComponent } from './movies/movies.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movie/:id', component: MovieDetailsComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'category/:category', component: MoviesInCategoryComponent},
    {path: '**', component: PageNotFoundComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}