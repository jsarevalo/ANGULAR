import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '@modules/users/services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [ './user-page.component.css' ],
})
export class UserPageComponent implements OnInit {
  public user$!: Observable<any>;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.user$ = this.userService.getUser(id);
  }

}
