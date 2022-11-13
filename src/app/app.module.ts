import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '@modules/header/components/header/header.component';
import { UserTypeService } from '@modules/UserTypes/services/user-type.service';
import { PrivacyPolicyComponent } from '@modules/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ UserTypeService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
