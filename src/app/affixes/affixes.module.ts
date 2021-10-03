import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffixesRoutingModule } from './affixes-routing.module';
import { FilteraffixePipe } from './filter/filteraffixe.pipe';
import { DetailComponent } from './filter/detail/detail.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    FilterComponent,
    FilteraffixePipe,
    DetailComponent
  ],
  imports: [
    CommonModule,
    AffixesRoutingModule
  ],
  entryComponents: [
    DetailComponent
  ]
})
export class AffixesModule { }
