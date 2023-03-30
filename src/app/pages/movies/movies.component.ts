import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.sevice.service';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies?: Observable<Movie[]>;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.movies = this.http.getMovies();
  }
}
