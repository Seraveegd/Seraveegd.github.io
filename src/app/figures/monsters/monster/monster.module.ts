import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonsterRoutingModule } from './monster-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    MonsterRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  entryComponents: [
    DetailComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ]
})
export class MonsterModule { }
