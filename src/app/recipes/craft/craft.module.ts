import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CraftRoutingModule } from './craft-routing.module';
import { FiltercraftPipe } from './filter/filtercraft.pipe';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    FilterComponent,
    FiltercraftPipe
  ],
  imports: [
    CommonModule,
    CraftRoutingModule
  ]
})
export class CraftModule { }
