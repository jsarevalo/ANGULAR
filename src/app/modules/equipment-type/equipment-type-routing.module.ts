import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentTypesComponent } from '@modules/equipment-type/pages/equipment-types.component';
import { EquipmentTypeComponent } from '@modules/equipment-type/pages/equipment-type.component';

const routes: Routes = [
  { path: '', component: EquipmentTypesComponent },
  { path: ':id', component: EquipmentTypeComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class EquipmentTypeRoutingModule {}
