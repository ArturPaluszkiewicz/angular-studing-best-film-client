import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.sevice.service';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css']
})
export class MoviesInCategoryComponent implements OnInit {
    movies?: Observable<Movie[]>;

    constructor(private http: HttpService, private route: ActivatedRoute){}

    ngOnInit(){
      const category = this.route.snapshot.paramMap.get('category');
      this.movies = this.http.getMoviesFromCategory(category);
    }
}
