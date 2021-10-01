import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { FilterComponent } from './filter/filter.component';
import { FilterequipmentPipe } from './filter/filterequipment.pipe';


@NgModule({
  declarations: [
    FilterComponent,
    FilterequipmentPipe
  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule
  ]
})
export class EquipmentsModule { }
