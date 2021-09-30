import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RunesComponent } from './runes/runes.component';

const routes: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      { path: 'craft', loadChildren: () => import('./craft/craft.module').then(m => m.CraftModule) },
      { path: 'runes', component: RunesComponent }
      // { path: 'filter/:type/:type_detail', component: FilterComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
