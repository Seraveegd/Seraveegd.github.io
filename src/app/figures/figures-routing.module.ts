import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiguresComponent } from './figures.component';
import { DetailComponent } from './monster/detail/detail.component';

const routes: Routes = [
  {
    path: '', component: FiguresComponent, children: [
      { path: 'monster', loadChildren: () => import('./monster/monster.module').then(m => m.MonsterModule) },
      { path: 'monster/detail/:id', component: DetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiguresRoutingModule { }
