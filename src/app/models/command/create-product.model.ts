import { IBrand } from "../catalog/brand.model"
import { IType } from "../catalog/type.model"

export interface ICreateProduct{
    name: string
    summary: string
    description: string
    imageFile: string
    price: number
    brands: IBrand
    types: IType
}