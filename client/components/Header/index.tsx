import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { MdShoppingBasket } from 'react-icons/md'

import { RootState } from '@client/store/modules/rootReducer'

import { Container, Cart } from './styles'
import Modal from '@components/modal'
import CartView from '@client/views/cart'

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const cartStore = useSelector((state: RootState) => state.cart)

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
        <Cart onClick={() => setIsOpen(true)}>
          <div>
            <strong>Meu Carrinho</strong>
            <span>{cartStore.length} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#fac23c" />
        </Cart>
      </Container>
    </>
  )
}

export default Header
