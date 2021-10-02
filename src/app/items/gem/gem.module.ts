import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GemRoutingModule } from './gem-routing.module';
import { FilterComponent } from './filter/filter.component';
import { FiltergemPipe } from './filter/filtergem.pipe';


@NgModule({
  declarations: [
    FilterComponent,
    FiltergemPipe
  ],
  imports: [
    CommonModule,
    GemRoutingModule
  ]
})
export class GemModule { }
