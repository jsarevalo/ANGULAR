import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  private url = environment.endpoint_url;

  constructor(private http: HttpClient) { }

  public getUserTypes(): Observable<any> {
    return this.http.get(`${ this.url }/tipper`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }

  public updateUserType(user: any): Observable<any> {
    return this.http.put(`${ this.url }/tipper`, user)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo actualizar' } ])));
  }

  public createUserType(user: any): Observable<any> {
    return this.http.post(`${ this.url }/tipper`, user)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo crear' } ])));
  }

  public getUserType(id: any): Observable<any> {
    return this.http.get(`${ this.url }/tipper/${ id }`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }
}
