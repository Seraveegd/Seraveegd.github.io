import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      { path: 'craft', loadChildren: () => import('./craft/craft.module').then(m => m.CraftModule) }
      // { path: 'filter/:type/:type_detail', component: FilterComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
