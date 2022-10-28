import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { BrandService } from '@modules/brands/Services/brand.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './brands.component.html',
  styleUrls: [ './brands.component.css' ],
})
export class BrandsComponent implements OnInit {
  public brands$!: Observable<any>;
  public brandForm: FormGroup = new FormGroup({});
  public isEditorOpen = false;
  public isCreateMode = false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brands$ = this.brandService.getBrands();
    this.brandForm = new FormGroup(
      {
        Id_marca: new FormControl(0),
        Nombre_Marca: new FormControl(''),
        Unidad: new FormControl(0),
        Pais_Origen: new FormControl(''),
      },
    );
  }

  public loadData(mockData: any) {
    this.isCreateMode = false;
    this.brandForm.setValue(mockData);
  }

  public openEditor(): void {
    this.isEditorOpen = true;
  }

  public updateBrand() {
    const data = this.brandForm.value;
    data.Id_TipoDocumento = Number(data.Id_TipoDocumento);

    this.brandService.updateBrand(this.brandForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  public cleanFields(): void {
    const data = {
      Id_marca: 0,
      Nombre_Marca: '',
      Unidad: 0,
      Pais_Origen: '',
    };
    this.isCreateMode = true;
    this.brandForm.setValue(data);
  }

  public createBrand() {
    this.brandService.createBrand(this.brandForm.value)
      .subscribe(value => this.closeAndUpdate(value));
  }

  closeAndUpdate(value: any) {
    if (!value?.error) {
      this.isEditorOpen = false;
      this.brands$ = this.brandService.getBrands();
    }
  }
}
