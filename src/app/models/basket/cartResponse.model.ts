import { IBasketItem } from "./basketItem.model";

export interface ICartReponse{
    name: string;
    totalPrice:number;
    items: IBasketItem[];
}