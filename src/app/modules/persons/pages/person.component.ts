import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '@modules/persons/Services/person.service';

@Component({
  selector: 'app-equipmentType',
  templateUrl: './person.component.html',
  styleUrls: [ './person.component.css' ],
})
export class PersonComponent implements OnInit {
  public person$!: Observable<any>;

  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.person$ = this.personService.getPerson(id);
  }

}
