import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { CraftComponent } from './craft/craft.component';
import { RunesComponent } from './runes/runes.component';


@NgModule({
  declarations: [
    CraftComponent,
    RunesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
