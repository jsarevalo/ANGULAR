import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EquipmentTypeService {
  private url = environment.endpoint_url;

  constructor(private http: HttpClient) { }

  public getEquipmentTypes(): Observable<any> {
    return this.http.get(`${ this.url }/tipequ`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }

  public updateEquipmentType(equipmentType: any): Observable<any> {
    return this.http.put(`${ this.url }/tipequ`, equipmentType)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo actualizar' } ])));
  }

  public createEquipmentType(equipmentType: any): Observable<any> {
    return this.http.post(`${ this.url }/tipequ`, equipmentType)
      .pipe(
        map(value => value),
        catchError(() => of([ { error: 'No se pudo crear' } ])));
  }

  public getEquipmentType(id: any): Observable<any> {
    return this.http.get(`${ this.url }/tipequ/${ id }`).pipe(
      map(value => value),
      catchError(() => of([])),
    );
  }
}
