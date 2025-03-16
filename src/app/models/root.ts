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
//datalist with filtering
export interface RootList<T> {
    data: Data<T>
    status: Status
  }
  //single data
  export interface Root<T> {
    data: T
    status: Status
  }
 