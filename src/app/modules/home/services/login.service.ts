import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = environment.endpoint_url;

  constructor(private http: HttpClient) { }

  public login(data: any): Observable<any> {
    return this.http.post(`${ this.url }/auth/login`, data)
      .pipe(map(value => value), catchError(() => of([])));
  }
}
