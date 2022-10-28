import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private url = environment.endpoint_url;

  constructor(private http: HttpClient) { }

  public getPersons(): Observable<any> {
    return this.http.get(`${ this.url }/persona`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }

  public updatePerson(user: any): Observable<any> {
    return this.http.put(`${ this.url }/persona`, user)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo actualizar' } ])));
  }

  public createPerson(user: any): Observable<any> {
    return this.http.post(`${ this.url }/persona`, user)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo crear' } ])));
  }

  public getPerson(id: any): Observable<any> {
    return this.http.get(`${ this.url }/persona/${ id }`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }

  public getPersonsWithoutUser() {
    return this.http.get(`${ this.url }/persona/no-user`)
      .pipe(
        map(value => value),
        catchError(() => of([])),
      );
  }
}
