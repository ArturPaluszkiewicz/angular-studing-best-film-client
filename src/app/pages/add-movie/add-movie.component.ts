import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpMoviesService } from 'src/app/services/http-movies.service';
import { HttpService } from 'src/app/services/http.sevice.service';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  model: Partial<Movie> = {};
  categories: string[] = [];
  years: string[] = [];

  constructor(private http: HttpService, private httpMovie: HttpMoviesService){}

  ngOnInit(): void{
    this.http.getCategories().subscribe(categories => this.categories = categories)
    this.http.getYears().subscribe(years => this.years = years)
  }

  send(): void{
    console.log(this.model);
    this.httpMovie.postMovies(this.model as Movie).subscribe({
      error: console.error,
      complete: console.info
    }
    )
  }
}
