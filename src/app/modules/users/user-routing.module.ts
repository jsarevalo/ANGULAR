import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from '@modules/users/pages/users-page.component';
import { UserPageComponent } from '@modules/users/pages/user-page.component';

const routes: Routes = [
  { path: '', component: UsersPageComponent },
  { path: ':id', component: UserPageComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class UserRoutingModule {}
