import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiguresRoutingModule } from './figures-routing.module';
import { MonsterComponent } from './monster/monster.component';


@NgModule({
  declarations: [
    MonsterComponent
  ],
  imports: [
    CommonModule,
    FiguresRoutingModule
  ]
})
export class FiguresModule { }
