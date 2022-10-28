import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './pages/loans.component';
import { LoanComponent } from './pages/loan.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoansComponent,
    LoanComponent,
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    ReactiveFormsModule,
  ],
})
export class LoansModule {}
