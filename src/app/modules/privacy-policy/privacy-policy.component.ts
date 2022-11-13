import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: [ './privacy-policy.component.css' ],
})
export class PrivacyPolicyComponent implements OnInit {
  @Input() modalClosed: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.modalClosed = localStorage.getItem('privacyPolicyAccepted') !== null;
  }

  savePolicyPreferences(accepted: boolean) {
    localStorage.setItem('privacyPolicyAccepted', accepted.toString());
    this.closeModal();
  }

  closeModal() {
    this.modalClosed = true;
  }

}
