import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'

import { RootState } from '@client/store/modules/rootReducer'
import { CartDispatcher } from '@client/store/modules/cart/action'

import { Container, ProductTable, Total } from './styles'
import { formatPrice } from '@client/utils/format'

interface ITotal {
  total: number
}

type CardViewProps = {
  onFinish(): void
}

const CartView: FC<CardViewProps> = ({ onFinish }) => {
  //get all the product added to cart
  const cartState = useSelector((state: RootState) => {
    //multiply all amount of product to product price
    state.cart = state.cart.map(product => ({
      ...product,
      subTotal: product.amount * product.price
    }))

    //get total o price of all product added to cart
    const totalPrice = state.cart.reduce((total_price, transation): number => {
      return total_price + transation.price * transation.amount
    }, 0)

    return {
      totalPrice: formatPrice(totalPrice),
      cart: state.cart
    }
  })
  const cartDispatcher = new CartDispatcher()

  function handleDeleteOfCart(id: number) {
    cartDispatcher.removeFromCart(id)
  }

  return (
    <>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cartState.cart.map(cart => (
              <tr key={cart.id}>
                <td>
                  <img src={cart.image} alt="Tênis" />
                </td>
                <td>
                  <strong>{cart.name}</strong>
                  <span>{cart.priceFormatted}</span>
                </td>

                <td>
                  <div>
                    <button
                      onClick={() => {
                        //remove product from cart
                        cartDispatcher.updateAmount({
                          amount: cart.amount - 1,
                          id: cart.id
                        })
                      }}
                    >
                      <MdRemoveCircleOutline size={20} color="#fac23c" />
                    </button>
                    <input type="number" readOnly value={cart.amount} />
                    <button
                      onClick={() => {
                        //add product to cart
                        cartDispatcher.updateAmount({
                          amount: cart.amount + 1,
                          id: cart.id
                        })
                      }}
                    >
                      <MdAddCircleOutline size={20} color="#fac23c" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{formatPrice(cart.amount * cart.price)}</strong>
                </td>
                <td>
                  <button onClick={() => handleDeleteOfCart(cart.id)}>
                    <MdDelete size={20} color="#fac23c" />{' '}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <button type="button" onClick={onFinish}>
            Finalizar Pedido
          </button>

          <Total>
            <span>TOTAL</span>
            <strong>{cartState.totalPrice}</strong>
          </Total>
        </footer>
      </Container>
    </>
  )
}

export default CartView
