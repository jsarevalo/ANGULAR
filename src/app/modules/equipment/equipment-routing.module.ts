import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsComponent } from '@modules/equipment/Pages/equipments.component';
import { EquipmentComponent } from '@modules/equipment/Pages/equipment.component';

const routes: Routes = [
  { path: '', component: EquipmentsComponent },
  { path: ':id', component: EquipmentComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class EquipmentRoutingModule {}
