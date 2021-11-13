import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MonsterComponent } from './monster.component';

const routes: Routes = [
  {
    path: '', component: MonsterComponent, children: [
      // { path: 'monster', loadChildren: () => import('./monster/monster.module').then(m => m.MonsterModule) }
      // { path: 'detail/:id', component: DetailComponent},
    ],
  },
  {
    path: 'detail/:id', component: MonsterComponent, children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterRoutingModule { }
