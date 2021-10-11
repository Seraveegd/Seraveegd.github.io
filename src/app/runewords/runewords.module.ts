import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunewordsRoutingModule } from './runewords-routing.module';
import { FilterComponent } from './filter/filter.component';
import { RuneComponent } from './rune/rune.component';
import { FilterrunewordPipe } from './filter/filterruneword.pipe';
import { CommunivateService } from './communivate.service';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    RuneComponent,
    FilterComponent,
    FilterrunewordPipe
  ],
  imports: [
    CommonModule,
    RunewordsRoutingModule,
    MatIconModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [
    CommunivateService
  ]
})
export class RunewordsModule { }
