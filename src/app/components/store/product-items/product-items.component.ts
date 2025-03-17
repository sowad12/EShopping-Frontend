import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/catalog/product.model';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent {
  @Input() product?:IProduct

  addItemToBasket(){
  
  }
  
}
