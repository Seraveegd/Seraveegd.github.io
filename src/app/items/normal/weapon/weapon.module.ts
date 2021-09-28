import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponRoutingModule } from './weapon-routing.module';
import { FilterComponent } from './filter/filter.component';
import { FilternormalweaponPipe } from './filter/filternormalweapon.pipe';


@NgModule({
  declarations: [
    FilterComponent,
    FilternormalweaponPipe
  ],
  imports: [
    CommonModule,
    WeaponRoutingModule
  ]
})
export class WeaponModule { }
