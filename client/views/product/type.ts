import { IProduct } from '@client/store/modules/cart/types'

export type ProductsProps = {
  products: IProduct[]
}

export interface IAmount {
  [key: number]: number
}
