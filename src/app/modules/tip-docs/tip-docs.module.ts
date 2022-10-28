import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipDocsRoutingModule } from './tip-docs-routing.module';
import { TipDocsService } from '@modules/tip-docs/services/tip-docs.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TipDocsRoutingModule,
  ],
  providers: [ TipDocsService ],
})
export class TipDocsModule {}
