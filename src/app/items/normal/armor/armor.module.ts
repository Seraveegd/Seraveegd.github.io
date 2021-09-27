import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmorRoutingModule } from './armor-routing.module';
import { FilterComponent } from './filter/filter.component';
import { FilternormalarmorPipe } from './filter/filternormalarmor.pipe';


@NgModule({
  declarations: [
    FilterComponent,
    FilternormalarmorPipe
  ],
  imports: [
    CommonModule,
    ArmorRoutingModule
  ]
})
export class ArmorModule { }
