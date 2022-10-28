import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonService } from '@modules/persons/Services/person.service';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '@modules/loans/services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: [ './loan.component.css' ],
})
export class LoanComponent implements OnInit {
  public loan$!: Observable<any>;

  constructor(private personService: LoanService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.loan$ = this.personService.getLoan(id);
  }
}
