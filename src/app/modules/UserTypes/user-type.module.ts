import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTypeRoutingModule } from './user-type-routing.module';
import { UserTypeService } from '@modules/UserTypes/services/user-type.service';
import { UserTypesPagesComponent } from './pages/user-types-pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTypePageComponent } from './pages/user-type-page.component';


@NgModule({
  declarations: [
    UserTypesPagesComponent,
    UserTypePageComponent,
  ],
  imports: [
    CommonModule,
    UserTypeRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ UserTypeService ],
})
export class UserTypeModule {}
