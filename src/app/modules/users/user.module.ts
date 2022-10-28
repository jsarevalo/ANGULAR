import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersPageComponent } from '@modules/users/pages/users-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from '@modules/users/pages/user-page.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    UserPageComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
