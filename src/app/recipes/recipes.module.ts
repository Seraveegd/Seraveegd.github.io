import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { CraftComponent } from './craft/craft.component';
import { RunesComponent } from './runes/runes.component';
import { ItemsComponent } from './items/items.component';
import { EquipmentsComponent } from './equipments/equipments.component';


@NgModule({
  declarations: [
    CraftComponent,
    RunesComponent,
    ItemsComponent,
    EquipmentsComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
