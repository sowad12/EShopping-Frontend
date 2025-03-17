export interface Status {
    code: number
    message: string
  }
export interface Data<T> {
    items: T[]
    offset: number
    limit: number
    size: number
  }
//datalist with filtering info
 export interface IFilterRootList<T> {
    data: Data<T>
    status: Status
  }
  export interface IRootList<T> {
    data: T[]
    status: Status
  }

  //single data
  export interface IRoot<T> {
    data: T
    status: Status
  }
 