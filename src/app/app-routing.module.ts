import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecepiesComponent} from './recepies/recepies.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';
import {RecipeStartComponent} from './recepies/recipe-start/recipe-start.component';
import {RecipeDetailtComponent} from './recepies/recipe-detailt/recipe-detailt.component';
import {RecipeEditComponent} from './recepies/recipe-edit/recipe-edit.component';
import {RecipesResolveService} from './recepies/recipes-resolve.service';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecepiesComponent, canActivate: [AuthGuard], children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailtComponent, resolve: [RecipesResolveService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolveService]}
    ]},
  {path: 'shopping-list', component: ShopingListComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
