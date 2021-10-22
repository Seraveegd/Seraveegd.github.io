import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { UniqueComponent } from './unique.component';

const routes: Routes = [{
    path: '', component: UniqueComponent, children: [
      // { path: 'filter/:type/:type_detail', component: FilterComponent}
      { path: 'filter/:code', component: FilterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniqueRoutingModule { }
