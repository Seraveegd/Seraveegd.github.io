import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalComponent } from './normal.component';

const routes: Routes = [
  {
    path: '', component: NormalComponent, children: [
      { path: 'armor', loadChildren: () => import('./armor/armor.module').then(m => m.ArmorModule) },
      { path: 'weapon', loadChildren: () => import('./weapon/weapon.module').then(m => m.WeaponModule) }
      // { path: 'filter/:type/:type_detail', component: FilterComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalRoutingModule { }
