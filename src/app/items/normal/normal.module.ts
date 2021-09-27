import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRoutingModule } from './normal-routing.module';
import { ArmorComponent } from './armor/armor.component';


@NgModule({
  declarations: [
    ArmorComponent
  ],
  imports: [
    CommonModule,
    NormalRoutingModule
  ]
})
export class NormalModule { }
