import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  {
    path: '', component: ItemsComponent, children: [
      { path: 'normal', loadChildren: () => import('./normal/normal.module').then(m => m.NormalModule) },
      { path: 'set', loadChildren: () => import('./set/set.module').then(m => m.SetModule) },
      { path: 'gem', loadChildren: () => import('./gem/gem.module').then(m => m.GemModule) },
      { path: 'unique', loadChildren: () => import('./unique/unique.module').then(m => m.UniqueModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
