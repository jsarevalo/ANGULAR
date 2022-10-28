import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './pages/brands.component';
import { BrandComponent } from '@modules/brands/pages/brand.component';

const routes: Routes = [
  { path: '', component: BrandsComponent },
  { path: ':id', component: BrandComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class BrandsRoutingModule {}
