import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterComponent } from './monster.component';

const routes: Routes = [
  {
    path: '', component: MonsterComponent, children: [],
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
