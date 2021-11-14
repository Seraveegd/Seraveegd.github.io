import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstersComponent } from './monsters.component';
import { SuperuniqueComponent } from './superunique/superunique.component';

const routes: Routes = [
  {
    path: '', component: MonstersComponent, children: [
      { path: 'monster', loadChildren: () => import('./monster/monster.module').then(m => m.MonsterModule) },
      { path: 'superunique', component: SuperuniqueComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonstersRoutingModule { }
