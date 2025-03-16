import { Component } from '@angular/core';
import { Product } from 'src/app/models/catalog/product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
   productList=new Array<Product>();

  constructor(private storeService:StoreService){}

  ngOnInit(): void {
    this.storeService.getProduct().subscribe(
      (response) => this.productList=response.data.items,
      (err) => console.error('Error fetching products:', err),
      ()=>console.log(this.productList)
    );
  }

}
