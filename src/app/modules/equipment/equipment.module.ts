import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EquipmentsComponent } from './Pages/equipments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EquipmentComponent } from './Pages/equipment.component';


@NgModule({
  declarations: [
    EquipmentsComponent,
    EquipmentComponent,
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    ReactiveFormsModule,
  ],
})
export class EquipmentModule {}
