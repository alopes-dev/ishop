import { cleanup, render, screen } from '@testing-library/react'
import Header from './index'
import { useSelector } from 'react-redux'

jest.mock('react-redux')

const makeSut = () => render(<Header />)

describe(Header.name, () => {
  afterEach(() => {
    jest.clearAllMocks()
    cleanup()
  })
  it('should render as expected ', async () => {
    ;(useSelector as jest.Mock).mockReturnValue({
      cart: []
    })

    makeSut()
    expect(screen.getByAltText(/Logo/i)).toBeInTheDocument()
    expect(screen.getByText(/iShop/i)).toBeInTheDocument()
    expect(screen.getByText(/Meu Carrinho/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shopping-basket/i)).toBeInTheDocument()
    expect(screen.getByText(/0 itens/i)).toBeInTheDocument()
  })
})
