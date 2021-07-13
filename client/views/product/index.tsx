import { FC, useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { formatPrice } from '@client/utils/format'

import { IProduct } from '@client/store/modules/cart/types'
import { CartDispatcher } from '@client/store/modules/cart/action'

import { ProductList } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '@client/store/modules/rootReducer'
import { getProducts } from '@services/product'
import { IAmount, ProductsProps } from './type'
import Modal from '@components/modal'
import CartView from '../cart'

const ProductView: FC<ProductsProps> = ({ products }) => {
  const cartState = useSelector((state: RootState) => {
    //total of all product added to cart
    const amounts = state.cart.reduce((total: IAmount, product): IAmount => {
      total[product.id] = product.amount

      return total
    }, {})

    return {
      cart: state.cart,
      amounts
    }
  })

  const cartDispatcher = new CartDispatcher()

  return (
    <>
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <strong>{product.name}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => {
                cartDispatcher.addToCart(product)
              }}
            >
              <div>
                <MdAddShoppingCart color="#fff" size={16} />
                {cartState.amounts[product.id] || 0}
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  )
}

export default ProductView
