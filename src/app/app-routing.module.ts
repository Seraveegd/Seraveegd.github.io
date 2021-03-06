import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'runewords', loadChildren: () => import('./runewords/runewords.module').then(m => m.RunewordsModule)},
  {path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)},
  {path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'affixes', loadChildren: () => import('./affixes/affixes.module').then(m => m.AffixesModule)},
  {path: 'figures', loadChildren: () => import('./figures/figures.module').then(m => m.FiguresModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
