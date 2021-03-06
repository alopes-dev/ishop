import { Reducer } from 'redux'
import { ICart, DispacthAction } from './types'

export const initital_state: ICart[] = []

export const cartReducer: Reducer<ICart[], DispacthAction> = (
  state = initital_state,
  action
): ICart[] => {
  if (action.type === 'LOAD_FROM_LOCALSTORAGE_TO_CART') {
    const carts = localStorage.getItem('ishop:cart')
    if (!carts) return state

    state = JSON.parse(carts)
    return state
  } else if (action.type === 'ADD_TO_CART') {
    const currentProductIndex = state.findIndex(
      product => product.id === action.payload.id
    )

    if (currentProductIndex < 0) {
      state = [...state, { ...action.payload, amount: 1 }]
      return state
    }

    state[currentProductIndex].amount += 1
    localStorage.setItem('ishop:cart', JSON.stringify(state))
    return state
  } else if (action.type === 'REMOVE_FROM_CART') {
    state = state.filter(product => product.id !== action.payload.id)
    localStorage.setItem('ishop:cart', JSON.stringify(state))
    return state
  } else if (action.type === 'UPDATE_AMOUNT') {
    if (action.payload.amount === 0) {
      // state = state.filter((product) => product.id !== action.payload.id);
      return state
    }

    state = state.map(product => {
      if (product.id === action.payload.id)
        product.amount = action.payload.amount

      return product
    })

    localStorage.setItem('ishop:cart', JSON.stringify(state))
    return state
  }
  return initital_state
}

export type CartType = ReturnType<typeof cartReducer>
