import { IBasket } from "../basket/basket.model";
import { IBasketItem } from "../basket/basketItem.model";

export class Basket implements IBasket{
    name:string;
    items:IBasketItem[]=[];
}