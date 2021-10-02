import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  {
    path: '', component: ItemsComponent, children: [
      { path: 'normal', loadChildren: () => import('./normal/normal.module').then(m => m.NormalModule) },
      { path: 'gem', loadChildren: () => import('./gem/gem.module').then(m => m.GemModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
