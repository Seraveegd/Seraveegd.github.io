import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraftComponent } from './craft.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {
    path: '', component: CraftComponent, children: [
      { path: 'filter/:type/:type_detail', component: FilterComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CraftRoutingModule { }
