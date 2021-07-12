import React from 'react'
// import { useSelector } from 'react-redux'
import { MdShoppingBasket } from 'react-icons/md'

// import { RootState } from '../../store/modules/rootReducer'

import { Container, Cart } from './styles'
// import logo2 from '../../assets/blackfridayamico.svg'

const Header: React.FC = () => {
  // const cartStore = useSelector((state: RootState) => state.cart)

  return (
    <>
      <Container>
        <div>
          <img src={'/assets/logo.svg'} alt="Logo" />
        </div>
        <Cart>
          <div>
            <strong>Meu Carrinho</strong>
            {/* <span>{cartStore.length} itens</span> */}
          </div>
          <MdShoppingBasket size={36} color="#fff" />
        </Cart>
      </Container>
    </>
  )
}

export default Header
