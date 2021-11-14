import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiguresComponent } from './figures.component';
import { DetailComponent } from './monsters/monster/detail/detail.component';

const routes: Routes = [
  {
    path: '', component: FiguresComponent, children: [
      { path: 'monsters', loadChildren: () => import('./monsters/monsters.module').then(m => m.MonstersModule) },
      { path: 'monsters/monster/detail/:id', component: DetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiguresRoutingModule { }
