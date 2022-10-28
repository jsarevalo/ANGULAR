import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { UserTypeService } from '@modules/UserTypes/services/user-type.service';

@Component({
  selector: 'app-user-types-pages',
  templateUrl: './user-types-pages.component.html',
  styleUrls: [ './user-types-pages.component.css' ],
})
export class UserTypesPagesComponent implements OnInit {
  public userTypes$!: Observable<any>;
  public userTypeForm: FormGroup = new FormGroup({});
  public isEditorOpen = false;
  public isCreateMode = false;

  constructor(private userTypeService: UserTypeService) { }

  ngOnInit(): void {
    this.userTypes$ = this.userTypeService.getUserTypes();
    this.userTypeForm = new FormGroup(
      {
        Id_Tipo: new FormControl(0),
        Nombre_Tipo_Usuario: new FormControl(''),
        Descripcion_del_Usuario: new FormControl(''),
      },
    );
  }

  public loadData(mockData: any) {
    this.isCreateMode = false;
    this.userTypeForm.setValue(mockData);
  }

  public openEditor(): void {
    this.isEditorOpen = true;
  }

  public updateUserType() {
    const data = this.userTypeForm.value;
    data.Id_TipoDocumento = Number(data.Id_TipoDocumento);

    this.userTypeService.updateUserType(this.userTypeForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  public cleanFields(): void {
    const data = {
      Id_Tipo: 0,
      Nombre_Tipo_Usuario: '',
      Descripcion_del_Usuario: '',
    };
    this.isCreateMode = true;
    this.userTypeForm.setValue(data);
  }

  public createUserType() {
    this.userTypeService.createUserType(this.userTypeForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  closeAndUpdate(value: any) {
    if (!value?.error) {
      this.isEditorOpen = false;
      this.userTypes$ = this.userTypeService.getUserTypes();
    }
  }
}
