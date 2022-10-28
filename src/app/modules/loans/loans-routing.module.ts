import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './pages/loans.component';
import { LoanComponent } from '@modules/loans/pages/loan.component';

const routes: Routes = [
  { path: '', component: LoansComponent },
  { path: ':id', component: LoanComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class LoansRoutingModule {}
