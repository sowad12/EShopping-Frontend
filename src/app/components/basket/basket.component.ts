import { Component } from '@angular/core';
import { ICartReponse } from 'src/app/models/basket/cartResponse.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  constructor(private basketService:BasketService){}
  basket:ICartReponse| null = null;
  ngOnInit(){
    
   this.basketService.basketSource$.subscribe(res=>{
       this.basket=res;
    })  

  }
  removeBasketItem(productId: number){
    this.basketService.removeItemFromBasket(productId);
  }

  incrementItem(productId: number){
    this.basketService.incrementItemQuantity(productId);
  }

  decrementItem(productId: number){
    this.basketService.decrementItemQuantity(productId);
  }
  
}
