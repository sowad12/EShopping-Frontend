import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/catalog/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product:IProduct;
  quantity:number=0;
  constructor(
    private productService:ProductService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.GetProductById();
  }
  GetProductById(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(+id).subscribe(
      (response) => this.product=response.data,
      (err) => console.error('Error fetching products:', err),
    );
  }
  incrementQuantity(){
    this.quantity++;
  }
  decrementQuantity(){
    if(this.quantity>1){
      this.quantity--;
    }
  }
  addItemToCart(){

  }
 
}
