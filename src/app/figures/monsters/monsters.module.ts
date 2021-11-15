import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonstersRoutingModule } from './monsters-routing.module';
import { MonsterComponent } from './monster/monster.component';
import { SuperuniqueComponent } from './superunique/superunique.component';
import { MatButtonModule } from '@angular/material/button';
import { TreasureclassComponent } from './treasureclass/treasureclass.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [
    MonsterComponent,
    SuperuniqueComponent,
    TreasureclassComponent
  ],
  imports: [
    CommonModule,
    MonstersRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule
  ],
  entryComponents: [
    TreasureclassComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ]
})
export class MonstersModule { }
