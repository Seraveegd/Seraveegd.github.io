import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunewordsComponent } from './runewords.component';
import { RuneComponent } from './rune/rune.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {
    path: '', component: RunewordsComponent, children: [
      { path: 'rune', component: RuneComponent },
      // { path: 'filter/:type/:type_detail', component: FilterComponent},
      { path: 'filter/:code', component: FilterComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunewordsRoutingModule { }
