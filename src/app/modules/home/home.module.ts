import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '@modules/home/services/login.service';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ LoginService ],
})
export class HomeModule {}
