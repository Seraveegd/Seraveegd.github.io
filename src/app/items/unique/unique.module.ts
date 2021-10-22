import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniqueRoutingModule } from './unique-routing.module';
import { FilterComponent } from './filter/filter.component';
import { FilteruniquePipe } from './filter/filterunique.pipe';
import { CommunivateService } from '../../runewords/communivate.service';


@NgModule({
  declarations: [
    FilterComponent,
    FilteruniquePipe
  ],
  imports: [
    CommonModule,
    UniqueRoutingModule
  ],
  providers: [
    CommunivateService
  ]
})
export class UniqueModule { }
