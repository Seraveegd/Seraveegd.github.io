import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetRoutingModule } from './set-routing.module';
import { FilterComponent } from './filter/filter.component';
import { FiltersetPipe } from './filter/filterset.pipe';


@NgModule({
  declarations: [
    FilterComponent,
    FiltersetPipe
  ],
  imports: [
    CommonModule,
    SetRoutingModule
  ]
})
export class SetModule { }
