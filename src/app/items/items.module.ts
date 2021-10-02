import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { NormalComponent } from './normal/normal.component';
import { GemComponent } from './gem/gem.component';


@NgModule({
  declarations: [
    NormalComponent,
    GemComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
