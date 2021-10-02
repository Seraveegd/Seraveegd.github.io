import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { GemComponent } from './gem.component';

const routes: Routes = [
  {
    path: '', component: GemComponent, children: [
      { path: 'filter/:type/:type_detail', component: FilterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GemRoutingModule { }
