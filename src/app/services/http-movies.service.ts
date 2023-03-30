import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
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
  makeError(): Observable<HttpErrorResponse> {
    return this.http
      .delete(this.url + '/' + 999)
      .pipe(tap(console.log), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse): Observable<never>{
    console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` +
      `Returned code: ${error.status} \n`
    );
    return throwError(() =>'Something bad happend; please try again later.');
  }
  headers(): Observable<HttpResponse<Movie[]>> {
    const myHeaders = new HttpHeaders({
      Authorizations: 'my_token',
      'Content-Type': 'application/jason',
      'X-Custom-Header': 'adava-kedava',
    });
    return this.http
      .get<Movie[]>(this.url, {observe: 'response',headers: myHeaders})
      .pipe(
        tap((res: HttpResponse<Movie[]>) => {
          console.log(res.headers.keys());
          console.log(res.headers.get('cache-control'))
          console.log(res.headers.get('content-type'))
          console.log(res.headers.get('expires'))
          console.log(res.headers.get('pragma'))
        })
      )
  }
  params(): Observable<Movie[]>{
    const myParams = new HttpParams()
      .set('_sort', 'titile')
      .set('_order','desc')
    return this.http
      .get<Movie[]>(this.url, {params: myParams})
      .pipe(tap(console.log));
  }
}
