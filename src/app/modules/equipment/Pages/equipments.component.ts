import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { EquipmentService } from '@modules/equipment/Services/equipment.service';
import { EquipmentTypeService } from '@modules/equipment-type/Services/equipment-type.service';
import { BrandService } from '@modules/brands/Services/brand.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: [ './equipments.component.css' ],
})
export class EquipmentsComponent implements OnInit {
  public equipments$!: Observable<any>;
  public equipmentTypes!: Array<any>;
  public brands!: Array<any>;
  public equipmentForm: FormGroup = new FormGroup({});
  public isEditorOpen = false;
  public isCreateMode = false;

  constructor(private equipmentService: EquipmentService, private equipmentTypeService: EquipmentTypeService, private brandService: BrandService) { }

  ngOnInit(): void {
    this.equipments$ = this.equipmentService.getEquipments();
    this.equipmentForm = new FormGroup(
      {
        Id_Equipo: new FormControl(0),
        Id_TipoEquipo: new FormControl(0),
        Id_marca: new FormControl(0),
        Serial: new FormControl(''),
        Descripcion: new FormControl(''),
        Nombre_marca: new FormControl(''),
      },
    );
  }

  public loadData(mockData: any) {
    this.isCreateMode = false;
    this.equipmentTypeService.getEquipmentTypes()
      .subscribe(
        data => {
          const currentEquipmentType = data.find((value: any) => value.Descripcion === mockData.Descripcion);
          mockData.Id_TipoEquipo = currentEquipmentType.Id_TipoEquipo;
          this.equipmentTypes = data;
          this.brandService.getBrands().subscribe(
            value => {
              const currentBrand = value.find((brand: any) => brand.Nombre_Marca === mockData.Nombre_marca);
              mockData.Id_marca = currentBrand.Id_marca;
              this.brands = value;
              this.equipmentForm.setValue(mockData);
            },
          );
        },
      );
  }

  public openEditor(): void {
    this.isEditorOpen = true;
  }

  public updateEquipment() {
    const data = this.equipmentForm.value;
    data.Id_TipoDocumento = Number(data.Id_TipoDocumento);

    this.equipmentService.updateEquipment(this.equipmentForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  public cleanFields(): void {
    const data = {
      Id_Equipo: 0,
      Id_TipoEquipo: null,
      Id_marca: null,
      Serial: '',
      Descripcion: '',
      Nombre_marca: '',
    };
    this.isCreateMode = true;
    this.equipmentTypeService.getEquipmentTypes().subscribe(
      value => {
        this.equipmentTypes = value;
        this.brandService.getBrands().subscribe(
          brand => {
            this.brands = brand;
          },
        );
        this.equipmentForm.setValue(data);
      },
    );
  }

  public createEquipment() {
    this.equipmentService.createEquipment(this.equipmentForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  closeAndUpdate(value: any) {
    if (!value?.error) {
      this.isEditorOpen = false;
      this.equipments$ = this.equipmentService.getEquipments();
    }
  }
}
