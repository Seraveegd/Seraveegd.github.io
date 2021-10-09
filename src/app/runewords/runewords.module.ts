import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunewordsRoutingModule } from './runewords-routing.module';
import { FilterComponent } from './filter/filter.component';
import { RuneComponent } from './rune/rune.component';
import { FilterrunewordPipe } from './filter/filterruneword.pipe';
import { CommunivateService } from './communivate.service';


@NgModule({
  declarations: [
    RuneComponent,
    FilterComponent,
    FilterrunewordPipe
  ],
  imports: [
    CommonModule,
    RunewordsRoutingModule
  ],
  providers: [
    CommunivateService
  ]
})
export class RunewordsModule { }
