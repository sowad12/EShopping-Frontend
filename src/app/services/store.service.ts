import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../models/catalog/product.model';
import { IFilterRootList,IRootList } from '../models/root';
import { IBrand } from '../models/catalog/brand.model';
import { IType } from '../models/catalog/type.model';
import { ProductsQuery } from '../models/catalog/query/get-all-product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient ) { }
  getProducts(productsQuery:ProductsQuery){
    let params = new HttpParams();
    if(productsQuery.brandId){
      params=params.append('brandId',productsQuery.brandId)
    }
    if(productsQuery.typeId){
      params=params.append('typeId',productsQuery.typeId)
    }
    if(productsQuery.searchQuery){
      params=params.append('searchQuery',productsQuery.searchQuery)
    }
    if(productsQuery.orderBy){
      params=params.append('orderBy',productsQuery.orderBy)
    }
     params = params.append('pagingOptions.Offset', productsQuery.pagingOptions.offset);
     params=params.append('pagingOptions.limit',productsQuery.pagingOptions.limit)
    return this.http.get<IFilterRootList<IProduct>>(environment.baseUrl+'catalog/get-all-products',{params})
  }
  getBrands(){
    return this.http.get<IRootList<IBrand>>(environment.baseUrl+'catalog/get-all-brands')
  }
  getTypes(){
    return this.http.get<IRootList<IType>>(environment.baseUrl+'catalog/get-all-types')
  }
}
