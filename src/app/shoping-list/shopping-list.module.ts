import {NgModule} from '@angular/core';
import {ShopingListComponent} from './shoping-list.component';
import {ShopingEditComponent} from './shoping-edit/shoping-edit.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ShopingListComponent,
    ShopingEditComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {path: '', component: ShopingListComponent},
    ]),
    SharedModule
  ],
  exports: []
})
export class ShoppingListModule {

}
