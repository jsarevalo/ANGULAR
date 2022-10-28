import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  private url = environment.endpoint_url;

  constructor(private http: HttpClient) { }

  public getEquipments(): Observable<any> {
    return this.http.get(`${ this.url }/equipo`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }

  public updateEquipment(equipment: any): Observable<any> {
    return this.http.put(`${ this.url }/equipo`, equipment)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo actualizar' } ])));
  }

  public createEquipment(equipment: any): Observable<any> {
    return this.http.post(`${ this.url }/equipo`, equipment)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo crear' } ])));
  }

  public getEquipment(id: any): Observable<any> {
    return this.http.get(`${ this.url }/equipo/${ id }`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }
}
