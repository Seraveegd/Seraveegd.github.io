import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunewordsRoutingModule } from './runewords-routing.module';
import { FilterComponent } from './filter/filter.component';
import { RuneComponent } from './rune/rune.component';
import { FilterrunewordPipe } from './filter/filterruneword.pipe';


@NgModule({
  declarations: [
    RuneComponent,
    FilterComponent,
    FilterrunewordPipe
  ],
  imports: [
    CommonModule,
    RunewordsRoutingModule
  ]
})
export class RunewordsModule { }
