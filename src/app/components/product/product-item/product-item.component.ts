import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/catalog/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product?:IProduct
  constructor( ){}
  addItemToBasket(){
  
  }
  
}
