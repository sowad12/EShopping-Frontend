import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    StoreComponent,
    ProductItemsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
],
  exports:[
    StoreComponent
  ]
})
export class StoreModule { }
