import { Component,ViewChild } from '@angular/core';
import { IBrand } from 'src/app/models/catalog/brand.model';
import { IProduct } from 'src/app/models/catalog/product.model';
import { ProductsQuery } from 'src/app/models/catalog/query/get-all-product.model';
import { IType } from 'src/app/models/catalog/type.model';
import { IPagenation } from 'src/app/models/common/pagenation.model';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
   totalCount:number=0;
   limit:number=0;
   offset:number=0;
   productList=new Array<IProduct>();
   brands:IBrand[]=[];
   types:IType[]=[];
   productsQuery:ProductsQuery=new ProductsQuery()
   sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Ascending', value: 'priceAsc' },
    { name: 'Price: Descending', value: 'priceDesc'}
  ];
  constructor(private storeService:StoreService){}

  ngOnInit(): void {
   this.getProducts();
   this.getBrands();
   this.getTypes();
  }
  getProducts(){
    this.storeService.getProducts(this.productsQuery).subscribe(
      (response) => {
        this.productList=response.data.items;
        this.totalCount=response.data.size;
        this.limit=response.data.limit;
        this.offset=response.data.offset;
      
      }, 
      (err) => console.error('Error fetching products:', err),
      ///()=>console.log(this.productList)
    );
  }
  getBrands(){
    this.storeService.getBrands().subscribe(
      (response) => this.brands=response.data,
      (err) => console.error('Error fetching products:', err),
      // ()=>console.log(this.productList)
    );
  }
  getTypes(){
    this.storeService.getTypes().subscribe(
      (response) => this.types=response.data,
      (err) => console.error('Error fetching products:', err),
     // ()=>console.log(this.productList)
    );
  }
  onBrandSelected(id:number){

  }
  onTypeSelected(id:number){

  }
  onSearch(){

  }
  onReset(){

  }

}
