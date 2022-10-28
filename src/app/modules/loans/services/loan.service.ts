import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private url = environment.endpoint_url;

  constructor(private http: HttpClient) { }

  public getLoans(): Observable<any> {
    return this.http.get(`${ this.url }/prestamo`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }

  public updateLoan(Loan: any): Observable<any> {
    return this.http.put(`${ this.url }/prestamo`, Loan)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo actualizar' } ])));
  }

  public createLoan(Loan: any): Observable<any> {
    return this.http.post(`${ this.url }/prestamo`, Loan)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo crear' } ])));
  }

  public getLoan(id: any): Observable<any> {
    return this.http.get(`${ this.url }/prestamo/${ id }`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }
}
