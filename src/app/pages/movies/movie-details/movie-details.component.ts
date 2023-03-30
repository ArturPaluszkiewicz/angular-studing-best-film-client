import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.sevice.service';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movieDetails?: Observable<Movie>;

  constructor(private http: HttpService){}

  goToMovies(){
 
  }
}
