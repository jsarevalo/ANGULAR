import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private url = environment.endpoint_url;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(`${ this.url }/usuario`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }

  public updateUsers(user: any): Observable<any> {
    return this.http.put(`${ this.url }/usuario`, user)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo actualizar' } ])));
  }

  public createUsers(user: any): Observable<any> {
    return this.http.post(`${ this.url }/usuario`, user)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo crear' } ])));
  }

  public getUser(id: any): Observable<any> {
    return this.http.get(`${ this.url }/usuario/${ id }`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }
}
