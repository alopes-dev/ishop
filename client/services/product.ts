import { IProduct } from '@client/store/modules/cart/types'
import api from './api'

export const getProducts = async () => {
  return await api.get<IProduct[]>('/product')
}
