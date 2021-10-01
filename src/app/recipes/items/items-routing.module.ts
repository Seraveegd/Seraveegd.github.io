import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  {
    path: '', component: ItemsComponent, children: [
      { path: 'filter/:type/:type_detail', component: FilterComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
