import { Component, OnInit } from '@angular/core';
import { UsersService } from '@modules/users/services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserTypeService } from '@modules/UserTypes/services/user-type.service';
import { PersonService } from '@modules/persons/Services/person.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './users-page.component.html',
  styleUrls: [ './users-page.component.css' ],
})
export class UsersPageComponent implements OnInit {
  public users$!: Observable<any>;
  public userForm: FormGroup = new FormGroup({});
  public isEditorOpen = false;
  public userTypes!: Array<any>;
  public persons$!: Observable<any>;
  public isCreateMode = false;

  constructor(private userService: UsersService, private userTypeService: UserTypeService, private noUserService: PersonService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
    this.userTypeService.getUserTypes().subscribe(
      value => this.userTypes = value,
    );

    this.userForm = new FormGroup(
      {
        Id_Usuario: new FormControl(0),
        nick_name: new FormControl(''),
        activo_usuario: new FormControl(false),
        password: new FormControl(''),
        Nombre_Tipo_Usuario: new FormControl(0),
        Id_Tipo: new FormControl(0),
      },
    );
  }

  public loadData(mockData: any) {
    this.isCreateMode = false;
    const currentUserType = this.userTypes.find(value => value.Nombre_Tipo_Usuario === mockData.Nombre_Tipo_Usuario);
    mockData.Id_Tipo = currentUserType.Id_Tipo;
    mockData.Fecha_Fin = new Date(mockData.Fecha_Fin);
    this.userForm.setValue(mockData);
  }

  public openEditor(): void {
    this.isEditorOpen = true;
  }

  public updateUser() {
    const data = this.userForm.value;
    data.activo_usuario = Number(data.activo_usuario);

    this.userService.updateUsers(this.userForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  public cleanFields(): void {
    const data = {
      Id_Usuario: null,
      nick_name: '',
      activo_usuario: false,
      password: '',
      Nombre_Tipo_Usuario: 0,
      Id_Tipo: 0,
    };
    this.isCreateMode = true;
    this.persons$ = this.noUserService.getPersonsWithoutUser();
    this.userForm.setValue(data);
  }

  public createUser() {
    this.userService.createUsers(this.userForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  closeAndUpdate(value: any) {
    if (!value?.error) {
      this.isEditorOpen = false;
      this.users$ = this.userService.getUsers();
    }
  }
}
