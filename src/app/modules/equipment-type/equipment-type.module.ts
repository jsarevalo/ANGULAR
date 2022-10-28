import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentTypeRoutingModule } from './equipment-type-routing.module';
import { EquipmentTypesComponent } from './pages/equipment-types.component';
import { EquipmentTypeComponent } from './pages/equipment-type.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquipmentTypesComponent,
    EquipmentTypeComponent,
  ],
  imports: [
    CommonModule,
    EquipmentTypeRoutingModule,
    ReactiveFormsModule,
  ],
})
export class EquipmentTypeModule {}
