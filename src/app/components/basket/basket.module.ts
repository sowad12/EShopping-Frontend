import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';

@NgModule({
  declarations: [
    BasketComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
