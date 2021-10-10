import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { SetComponent } from './set.component';

const routes: Routes = [
  {
    path: '', component: SetComponent, children: [
      { path: 'filter/:type/:type_detail', component: FilterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetRoutingModule { }
