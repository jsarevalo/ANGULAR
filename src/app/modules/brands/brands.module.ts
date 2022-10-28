import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './pages/brands.component';
import { BrandComponent } from './pages/brand.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BrandsComponent,
    BrandComponent,
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class BrandsModule {}
