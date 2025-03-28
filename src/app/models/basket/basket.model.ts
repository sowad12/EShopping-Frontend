import { IBasketItem } from "./basketItem.model"

export interface IBasket{
    name: string;
    items: IBasketItem[];
}