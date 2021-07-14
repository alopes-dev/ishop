import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { MdShoppingBasket } from 'react-icons/md'

import { RootState } from '@client/store/modules/rootReducer'

import { Container, Cart } from './styles'
import Modal from '@components/modal'
import CartView from '@client/views/cart'
import { CartDispatcher } from '@client/store/modules/cart/action'

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const cartStore = useSelector((state: RootState) => state.cart)

  const cartDispatcher = new CartDispatcher()

  function handleCartClicked() {
    cartDispatcher.loadFromLocalStorage()
    setIsOpen(true)
  }

  return (
    <>
      <Modal onClose={() => {}} isOpen={isOpen}>
        <CartView onFinish={() => setIsOpen(false)} />
      </Modal>
      <Container>
        <div>
          <img src={'/assets/logo.svg'} alt="Logo" />
        </div>
        <h1>iShop</h1>
        <Cart onClick={handleCartClicked}>
          <div>
            <strong>Meu Carrinho</strong>
            <span>{cartStore.length} itens</span>
          </div>
          <MdShoppingBasket
            aria-label="shopping-basket"
            size={36}
            color="#fac23c"
          />
        </Cart>
      </Container>
    </>
  )
}

export default Header
