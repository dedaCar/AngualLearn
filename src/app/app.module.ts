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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecipeDetailtComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
