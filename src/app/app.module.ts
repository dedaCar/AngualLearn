import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeDetailtComponent } from './recepies/recipe-detailt/recipe-detailt.component';
import { RecipeItemComponent } from './recepies/recipe-list/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import {RecipeListComponent} from './recepies/recipe-list/recipe-list.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shoping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeStartComponent} from './recepies/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecipeDetailtComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    RecipeListComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
