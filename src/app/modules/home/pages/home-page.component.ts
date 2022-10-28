import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '@modules/home/services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.css' ],
})
export class HomePageComponent implements OnInit {
  public userSession = new FormGroup({});
  public person!: Array<any>;
  public hasRequest: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.userSession = new FormGroup(
      { nick_name: new FormControl(''), password: new FormControl('') },
    );
  }

  public login(): void {
    this.loginService.login(this.userSession.value).subscribe(
      value => {
        this.hasRequest = true;
        this.person = value;
      },
    );
  }
}
