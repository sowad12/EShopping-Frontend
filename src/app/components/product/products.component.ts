import { Component,ElementRef,ViewChild } from '@angular/core';
import { IBrand } from 'src/app/models/catalog/brand.model';
import { IProduct } from 'src/app/models/catalog/product.model';
import { ProductsQuery } from 'src/app/models/query/get-all-product.model';
import { IType } from 'src/app/models/catalog/type.model';
import { IPagenation } from 'src/app/models/common/pagenation.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
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
  constructor(private productService:ProductService){}

  ngOnInit(): void {
   this.getProducts();
   this.getBrands();
   this.getTypes();
  }
  getProducts(){
    this.productService.getProducts(this.productsQuery).subscribe(
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
    this.productService.getBrands().subscribe(
      (response) => this.brands=[{id:0,name:'All'},...response.data],
      (err) => console.error('Error fetching products:', err),
      // ()=>console.log(this.productList)
    );
  }
  getTypes(){
    this.productService.getTypes().subscribe(
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
