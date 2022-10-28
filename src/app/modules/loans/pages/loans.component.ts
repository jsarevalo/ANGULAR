import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { EquipmentService } from '@modules/equipment/Services/equipment.service';
import { LoanService } from '@modules/loans/services/loan.service';
import { UsersService } from '@modules/users/services/users.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: [ './loans.component.css' ],
})
export class LoansComponent implements OnInit {
  public loans$!: Observable<any>;
  public users!: Array<any>;
  public equipments!: Array<any>;
  public equipmentForm: FormGroup = new FormGroup({});
  public isEditorOpen = false;
  public isCreateMode = false;

  constructor(private loanService: LoanService, private userService: UsersService, private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.loans$ = this.loanService.getLoans();
    this.equipmentForm = new FormGroup(
      {
        Id_Prestamo: new FormControl(0),
        Id_Equipo: new FormControl(0),
        Id_Usuario: new FormControl(0),
        Nombre_usuario: new FormControl(''),
        Serial_Equipo: new FormControl(''),
        Fecha_Inicio: new FormControl(new Date()),
        Fecha_Fin: new FormControl(new Date()),
        Observaciones_Inicio: new FormControl(''),
        Observaciones_Fin: new FormControl(''),
      },
    );
  }

  public loadData(mockData: any) {
    this.isCreateMode = false;
    mockData.Fecha_Fin = new Date(mockData.Fecha_Fin).toISOString().slice(0,16);
    mockData.Fecha_Inicio = new Date(mockData.Fecha_Inicio).toISOString().slice(0,16);
    this.userService.getUsers()
      .subscribe(
        data => {
          const currentUser = data.find((value: any) => value.nick_name  === mockData.Nombre_usuario);
          mockData.Id_Usuario  = currentUser.Id_Usuario ;
          this.users = data;
          this.equipmentService.getEquipments().subscribe(
            value => {
              const currentEquipment = value.find((brand: any) => brand.Serial_Equipo === mockData.Serial);
              mockData.Id_Equipo = currentEquipment.Id_Equipo;
              this.equipments = value;
              this.equipmentForm.setValue(mockData);
            },
          );
        },
      );
  }

  public openEditor(): void {
    this.isEditorOpen = true;
  }

  public updateLoad() {
    const data = this.equipmentForm.value;
    data.Id_TipoDocumento = Number(data.Id_TipoDocumento);

    this.loanService.updateLoan(this.equipmentForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  public cleanFields(): void {
    const data = {
      Id_Prestamo: 0,
      Id_Equipo: null,
      Id_Usuario: null,
      Nombre_usuario: '',
      Serial_Equipo: '',
      Fecha_Inicio: new Date().toISOString().slice(0,16),
      Fecha_Fin: new Date().toISOString().slice(0,16),
      Observaciones_Inicio: '',
      Observaciones_Fin: '',
    };
    this.isCreateMode = true;
    this.userService.getUsers().subscribe(
      value => {
        this.users = value;
        this.equipmentService.getEquipments().subscribe(
          equipment => {
            this.equipments = equipment;
          },
        );
        this.equipmentForm.setValue(data);
      },
    );
  }

  public createLoans() {
    this.loanService.createLoan(this.equipmentForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  closeAndUpdate(value: any) {
    if (!value?.error) {
      this.isEditorOpen = false;
      this.loans$ = this.loanService.getLoans();
    }
  }
}
