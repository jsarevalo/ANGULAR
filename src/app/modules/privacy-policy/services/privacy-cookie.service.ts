import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivacyCookieService {

  constructor() { }

  hasPrivacyPolicyBeenAccepted(): boolean {
    return localStorage.getItem('privacyPolicyAccepted') === 'true';
  }
}
