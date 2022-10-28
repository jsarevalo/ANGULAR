import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from '@modules/persons/pages/persons.component';
import { PersonComponent } from '@modules/persons/pages/person.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: ':id', component: PersonComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PersonsRoutingModule {}
