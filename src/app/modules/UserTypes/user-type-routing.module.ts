import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTypesPagesComponent } from '@modules/UserTypes/pages/user-types-pages.component';
import { UserTypePageComponent } from '@modules/UserTypes/pages/user-type-page.component';

const routes: Routes = [
  { path: '', component: UserTypesPagesComponent },
  { path: ':id', component: UserTypePageComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class UserTypeRoutingModule {}
