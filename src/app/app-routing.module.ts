import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule) },
  { path: 'usuarios', loadChildren: () => import('@modules/users/user.module').then(m => m.UserModule) },
  { path: 'personas', loadChildren: () => import('@modules/persons/persons.module').then(m => m.PersonsModule) },
  {
    path: 'tipos-usuario',
    loadChildren: () => import('@modules/UserTypes/user-type.module').then(m => m.UserTypeModule),
  },
  { path: 'equipos', loadChildren: () => import('@modules/equipment/equipment.module').then(m => m.EquipmentModule) },
  {
    path: 'tipos-equipo',
    loadChildren: () => import('@modules/equipment-type/equipment-type.module').then(m => m.EquipmentTypeModule),
  },
  { path: 'marcas', loadChildren: () => import('@modules/brands/brands.module').then(m => m.BrandsModule) },
  { path: 'prestamos', loadChildren: () => import('@modules/loans/loans.module').then(m => m.LoansModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
