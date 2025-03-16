import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from '../models/catalog/product';
import { RootList } from '../models/root';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient ) { }
  getProduct(){
    return this.http.get<RootList<Product>>(environment.baseUrl+'catalog/get-all-products')
  }
}
