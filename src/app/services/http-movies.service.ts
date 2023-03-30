import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie } from 'src/models/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {
  private url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http
    .get<Movie[]>(this.url, {observe: 'response'})
    .pipe(tap(console.log));
  }
  postMovies(movie: Movie){
    return this.http.post(this.url, movie).pipe(tap(console.log));
  }

  putMovies(movie: Movie){
    return this.http.put(this.url + '/'+ movie.id, movie).pipe(tap(console.log));
  }

  patchMovie(movie: Partial<Movie>){
    return this.http.patch(this.url + '/' + movie.id, movie).pipe(tap(console.log));
  }
  deleteMovie(id: string): Observable<{}>{
    return this.http.delete<{}>(this.url + '/' + id).pipe(tap(console.log))
  }

}
