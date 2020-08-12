import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './Components/item-list/item-list.component';
import { BillingDetailComponent } from './Components/billing-detail/billing-detail.component';
import { OrderDetailComponent } from './Components/order-detail/order-detail.component';
import { SummaryPipe } from '../app/Pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    BillingDetailComponent,
    OrderDetailComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
