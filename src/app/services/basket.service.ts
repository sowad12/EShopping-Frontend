import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBasket } from '../models/basket/basket.model';
import { environment } from 'src/environments/environment.development';
import { IRoot } from '../models/root';
import { ICartReponse } from '../models/basket/cartResponse.model';
import { BehaviorSubject } from 'rxjs';
import { IBasketItem } from '../models/basket/basketItem.model';
import { IProduct } from '../models/catalog/product.model';
import { Basket } from '../models/command/create-basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
 private basketSource=new BehaviorSubject<ICartReponse|null>(null);
 private basketTotal=new BehaviorSubject<number|null>(null);
 basketSource$=this.basketSource.asObservable();
 basketTotal$=this.basketTotal.asObservable();
  constructor(private http:HttpClient) { }

  updateCart(basket:IBasket){
    return this.http.post<IRoot<ICartReponse>>(environment.baseUrl+`basket/update-cart`,basket).subscribe({
      next:(response) =>{
        console.log("responsepost",response.data)
        this.basketSource.next(response.data);
        this.calculateBasketTotal();
      }
    });
  }
  getCart(userName:string){
    return this.http.get<IRoot<ICartReponse>>(environment.baseUrl+`basket/get-cart?name=${userName}`).subscribe({
      next:(response) =>{
        this.basketSource.next(response.data);
        this.calculateBasketTotal();
      }
    })
  }
  deleteBasket(userName: string) {
    return this.http.delete(environment.baseUrl+ `basket/get-cart?name=${userName}`).subscribe({
      next:(response) =>{
        this.basketSource.next(null);
        this.basketTotal.next(null);
        localStorage.removeItem('basket_username');
      }
    })
  }

  getCurrentBasket(){
    return this.basketSource.value;
  }
  addItemToBasket(item:IProduct,quantity:number=1){
    if(item){  
      const basket = this.getCurrentBasket() ?? this.createBasket();
      const currProduct=basket.items.find(x=>x.productId===item.id);
      if(currProduct){
        currProduct.quantity+=1;
      }
      else{
        const basketItem:IBasketItem={} as IBasketItem; 
        basketItem.imageFile=item.imageFile;
        basketItem.price=item.price;
        basketItem.productId=item.id;
        basketItem.productName=item.name;
        basketItem.quantity=quantity;
        basket.items.push(basketItem);
      }
      this.updateCart(basket);
    }
  }

  incrementItemQuantity(productId: number){
    const basket = this.getCurrentBasket();
    if(!basket) return;
    const founItemIndex = basket.items.findIndex((x)=>x.productId === productId);
    basket.items[founItemIndex].quantity++;
    this.updateCart(basket);
  }
  decrementItemQuantity(productId: number){
    const basket = this.getCurrentBasket();
    if(!basket) return;
    const founItemIndex= basket.items.findIndex((x)=>x.productId === productId);
    if( basket.items[founItemIndex].quantity>1){
      basket.items[founItemIndex].quantity--;
      this.updateCart(basket);
    }
    else{
      this.removeItemFromBasket(productId);   
    }
    
  }
  removeItemFromBasket(productId: number){
    const basket = this.getCurrentBasket();
    if(!basket) return;
    if(basket.items.some((x) =>x.productId ===productId)){
      basket.items = basket.items.filter((x)=>x.productId!== productId)
      if(basket.items.length>0){
        this.updateCart(basket);
      }else{
        this.deleteBasket(basket.name);
      }
    }
  }

  private createBasket(){
    const basket=new Basket();
    basket.name="sowad";
    localStorage.setItem('basket_username',basket.name)
    return basket;
  }

  private calculateBasketTotal(){
    const basket = this.getCurrentBasket();
    if(!basket) return;
    //We are going to loop over in array and calculate total
    const total = basket.items.reduce((x, y)=> (y.price * y.quantity) + x, 0);
    this.basketTotal.next(total);
  }

}
