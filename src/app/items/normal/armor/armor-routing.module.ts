import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmorComponent } from './armor.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {
    path: '', component: ArmorComponent, children: [
      { path: 'filter/:type/:type_detail', component: FilterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmorRoutingModule { }
