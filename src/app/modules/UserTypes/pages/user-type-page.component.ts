import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserTypeService } from '@modules/UserTypes/services/user-type.service';

@Component({
  selector: 'app-user-type-page',
  templateUrl: './user-type-page.component.html',
  styleUrls: [ './user-type-page.component.css' ],
})
export class UserTypePageComponent implements OnInit {
  public userType$!: Observable<any>;

  constructor(private userTypeService: UserTypeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.userType$ = this.userTypeService.getUserType(id);
  }

}
