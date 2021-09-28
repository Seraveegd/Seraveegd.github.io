import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRoutingModule } from './normal-routing.module';
import { ArmorComponent } from './armor/armor.component';
import { WeaponComponent } from './weapon/weapon.component';


@NgModule({
  declarations: [
    ArmorComponent,
    WeaponComponent
  ],
  imports: [
    CommonModule,
    NormalRoutingModule
  ]
})
export class NormalModule { }
