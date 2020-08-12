import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './Components/item-list/item-list.component';
import { OrderDetailComponent } from './Components/order-detail/order-detail.component';



const routes: Routes = [
   {
    path : '',
    component : ItemListComponent
   },
  {
    path : 'ItemList',
    component : ItemListComponent
  },
  {
    path : 'ItemList/:category',
    component : ItemListComponent
  },
  {
    path : 'OrderSummary',
    component : OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
