import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiguresRoutingModule } from './figures-routing.module';
import { MonstersComponent } from './monsters/monsters.component';


@NgModule({
  declarations: [
    MonstersComponent
  ],
  imports: [
    CommonModule,
    FiguresRoutingModule
  ]
})
export class FiguresModule { }
