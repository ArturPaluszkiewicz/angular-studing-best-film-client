import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from 'src/app/services/http-movies.service';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  errorMessage?: string;
  constructor(private http: HttpMoviesService) {}

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    const movie: Movie = {
      country: 'Poland',
      director: 'Marek Costam',
      category: 'Fantasy',
      plot: 'Zabojca potworow Geralt',
      poster: null,
      year: '2001',
      title: 'Wiedzmin',
      imdbRating: '1.0'
    };
    this.http.postMovies(movie).subscribe();
  }

  put() {
    const movie: Movie = {
      id: '54',
      country: 'Poland',
      director: 'Marek Costam',
      category: 'Fantasy',
      plot: 'Zabojca potworow Geralt',
      poster: null,
      year: '2001',
      title: 'Wiedzmin 2',
      imdbRating: '1.0'
    };
    this.http.putMovies(movie).subscribe();
  }

  patch() {
    const movie: Partial<Movie> = {
      id: '54',
      plot: 'Geralt szuka Ciri',
    }
    this.http.patchMovie(movie).subscribe();
  }

  delete() {
    this.http.deleteMovie('54').subscribe();
  }
  Error(){
    this.http.makeError().subscribe({error: (err: string) => (this.errorMessage = err)});
  }
  headers(){
    this.http.headers().subscribe();
  }
  params(){
    this.http.params().subscribe();
  }
}