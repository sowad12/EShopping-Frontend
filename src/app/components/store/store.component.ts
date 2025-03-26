import { Component,ElementRef,ViewChild } from '@angular/core';
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
  @ViewChild('search')search?:ElementRef
   total:number=0;
   limit:number=0;
   offset:number=0;
   productList=new Array<IProduct>();
   brands:IBrand[]=[];
   types:IType[]=[];
   productsQuery:ProductsQuery=new ProductsQuery()
   sortOptions = [
    { name: 'Alphabetical', value: 'name asc' },
    { name: 'Price: Ascending', value: 'price asc' },
    { name: 'Price: Descending', value: 'price desc'}
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
        this.total=response.data.size;
        this.limit=response.data.limit;
        this.offset=response.data.offset;    
      }, 
      (err) => console.error('Error fetching products:', err),
    );
  }
  getBrands(){
    this.storeService.getBrands().subscribe(
      (response) => this.brands=[{id:0,name:'All'},...response.data],
      (err) => console.error('Error fetching products:', err),
      // ()=>console.log(this.productList)
    );
  }
  getTypes(){
    this.storeService.getTypes().subscribe(
      (response) => this.types=[{id:0,name:'All'},...response.data],
      (err) => console.error('Error fetching products:', err),
     // ()=>console.log(this.productList)
    );
  }
  onBrandSelected(id:number){
    this.productsQuery.brandId=id;
    this.getProducts();
  }
  onTypeSelected(id:number){
    this.productsQuery.typeId=id;
    this.getProducts();
  }
  OnProductPageChange(event:IPagenation){
    this.productsQuery.pagingOptions.limit=event.limit;
    this.productsQuery.pagingOptions.offset=event.offset;
    this.getProducts();
  }
  onSortSelected(event:any){
    this.productsQuery.orderBy=event.target.value;
    this.getProducts();
  }
  onSearch(){
    this.productsQuery.searchQuery = this.search?.nativeElement.value;
    this.getProducts();
  }
  onReset(){
    this.productsQuery=new ProductsQuery();
    this.getProducts();
  }
 
}
