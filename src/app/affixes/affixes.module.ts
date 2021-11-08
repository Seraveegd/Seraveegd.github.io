import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffixesRoutingModule } from './affixes-routing.module';
import { FilteraffixePipe } from './filter/filteraffixe.pipe';
import { DetailComponent } from './filter/detail/detail.component';
import { FilterComponent } from './filter/filter.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FilterComponent,
    FilteraffixePipe,
    DetailComponent
  ],
  imports: [
    CommonModule,
    AffixesRoutingModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    DetailComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ]
})
export class AffixesModule { }
