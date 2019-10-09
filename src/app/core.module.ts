import {NgModule} from '@angular/core';
import {ShoppingListService} from './shoping-list/shopping-list.service';
import {RecipeService} from './recepies/recipe.service';
import {DataStorageService} from './shared/data-storage.service';
import {RecipesResolveService} from './recepies/recipes-resolve.service';
import {AuthService} from './auth/auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AuthGuard} from './auth/auth.guard';
import {LoggingService} from './logging.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipesResolveService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    AuthGuard,
    LoggingService
  ],
})

export class CoreModule {
}
