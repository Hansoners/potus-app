import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  url = 'https://potus-api-flask.herokuapp.com/potus/1.0/tweets';
  constructor(private http: HttpClient) { }

  getTweets(): Observable<any> {
    return this.http.get<Observable<any>>(this.url).pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

}
