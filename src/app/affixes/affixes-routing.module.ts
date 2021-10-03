import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { AffixesComponent } from './affixes.component';

const routes: Routes = [
  {
    path: '', component: AffixesComponent, children: [
      // { path: 'rune', component: RuneComponent },
      { path: 'filter/:type/:type_detail', component: FilterComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffixesRoutingModule { }
