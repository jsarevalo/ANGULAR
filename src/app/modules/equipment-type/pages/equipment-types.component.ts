import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { EquipmentTypeService } from '@modules/equipment-type/Services/equipment-type.service';

@Component({
  selector: 'app-equipments-types',
  templateUrl: './equipment-types.component.html',
  styleUrls: [ './equipment-types.component.css' ],
})
export class EquipmentTypesComponent implements OnInit {
  public equipmentType$!: Observable<any>;
  public equipmentTypeForm: FormGroup = new FormGroup({});
  public isEditorOpen = false;
  public isCreateMode = false;

  constructor(private equipmentTypeService: EquipmentTypeService) { }

  ngOnInit(): void {
    this.equipmentType$ = this.equipmentTypeService.getEquipmentTypes();
    this.equipmentTypeForm = new FormGroup(
      {
        Id_TipoEquipo: new FormControl(0),
        nombre_tipo_equipo: new FormControl(''),
        Descripcion: new FormControl(''),
      },
    );
  }

  public loadData(mockData: any) {
    this.isCreateMode = false;
    this.equipmentTypeForm.setValue(mockData);
  }

  public openEditor(): void {
    this.isEditorOpen = true;
  }

  public updateEquipmentType() {
    const data = this.equipmentTypeForm.value;
    data.Id_TipoDocumento = Number(data.Id_TipoDocumento);

    this.equipmentTypeService.updateEquipmentType(this.equipmentTypeForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  public cleanFields(): void {
    const data = {
      Id_TipoEquipo: 0,
      nombre_tipo_equipo: '',
      Descripcion: '',
    };
    this.isCreateMode = true;
    this.equipmentTypeForm.setValue(data);
  }

  public createEquipmentType() {
    this.equipmentTypeService.createEquipmentType(this.equipmentTypeForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  closeAndUpdate(value: any) {
    if (!value?.error) {
      this.isEditorOpen = false;
      this.equipmentType$ = this.equipmentTypeService.getEquipmentTypes();
    }
  }
}
