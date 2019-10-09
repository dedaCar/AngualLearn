import {NgModule} from '@angular/core';
import {RecepiesComponent} from './recepies.component';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailtComponent} from './recipe-detailt/recipe-detailt.component';
import {RecipesResolveService} from './recipes-resolve.service';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '', component: RecepiesComponent, canActivate: [AuthGuard], children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailtComponent, resolve: [RecipesResolveService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolveService]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
