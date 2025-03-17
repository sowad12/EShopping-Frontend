import { IBrand } from "../brand.model"
import { IType } from "../type.model"

export interface ICreateProduct{
    name: string
    summary: string
    description: string
    imageFile: string
    price: number
    brands: IBrand
    types: IType
}