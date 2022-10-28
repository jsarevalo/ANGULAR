import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private url = environment.endpoint_url;

  constructor(private http: HttpClient) { }

  public getBrands(): Observable<any> {
    return this.http.get(`${ this.url }/marca`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }

  public updateBrand(Brand: any): Observable<any> {
    return this.http.put(`${ this.url }/marca`, Brand)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo actualizar' } ])));
  }

  public createBrand(Brand: any): Observable<any> {
    return this.http.post(`${ this.url }/marca`, Brand)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo crear' } ])));
  }

  public getBrand(id: any): Observable<any> {
    return this.http.get(`${ this.url }/marca/${ id }`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }
}
