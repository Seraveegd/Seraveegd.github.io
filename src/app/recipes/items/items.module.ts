import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { FilterComponent } from './filter/filter.component';
import { FilteritemPipe } from './filter/filteritem.pipe';


@NgModule({
  declarations: [
    FilterComponent,
    FilteritemPipe
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
