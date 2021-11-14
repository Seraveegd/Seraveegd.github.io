import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonstersRoutingModule } from './monsters-routing.module';
import { MonsterComponent } from './monster/monster.component';
import { SuperuniqueComponent } from './superunique/superunique.component';
import { DetailComponent } from './monster/detail/detail.component';


@NgModule({
  declarations: [
    MonsterComponent,
    SuperuniqueComponent
  ],
  imports: [
    CommonModule,
    MonstersRoutingModule
  ]
})
export class MonstersModule { }
