import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HttpService } from 'src/app/services/http.sevice.service';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-movie-in-years',
  templateUrl: './movie-in-years.component.html',
  styleUrls: ['./movie-in-years.component.css']
})
export class MovieInYearsComponent implements OnInit{
  movies?: Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getMoviesFromYear(params.get('year')))
    )
  }
}
