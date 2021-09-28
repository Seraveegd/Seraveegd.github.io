import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { WeaponComponent } from './weapon.component';

const routes: Routes = [
  {
    path: '', component: WeaponComponent, children: [
      { path: 'filter/:type/:type_detail', component: FilterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeaponRoutingModule { }
