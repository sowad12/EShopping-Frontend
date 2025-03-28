import { IPagenation } from "../common/pagenation.model";
import { ISort } from "../common/sort.model";

export class ProductsQuery{
    brandId?: number;
    typeId?: number;
    searchQuery?: string;
    pagingOptions: IPagenation;
    // sortOptions?: ISort;
    orderBy?:string;
    constructor(){
        this.pagingOptions ={ offset: 0, limit: 10 };
    }
}