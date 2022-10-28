import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TipDocsService {

  private url = environment.endpoint_url;

  constructor(private http: HttpClient) { }

  public getTipDocs(): Observable<any> {
    return this.http.get(`${ this.url }/tipdoc`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }

  public updateTipDoc(user: any): Observable<any> {
    return this.http.put(`${ this.url }/tipdoc`, user)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo actualizar' } ])));
  }

  public createTipDoc(user: any): Observable<any> {
    return this.http.post(`${ this.url }/tipdoc`, user)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo crear' } ])));
  }

  public getTipDoc(id: any): Observable<any> {
    return this.http.get(`${ this.url }/tipdoc/${ id }`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }
}
