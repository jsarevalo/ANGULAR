import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './pages/persons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './pages/person.component';


@NgModule({
  declarations: [
    PersonsComponent,
    PersonComponent,
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class PersonsModule {}
