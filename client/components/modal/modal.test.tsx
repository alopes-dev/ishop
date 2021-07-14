import Modal from './index'
import { cleanup, render, screen } from '@testing-library/react'

type MockComponentProps = {
  isOpen?: boolean
}
const MockComponent = ({ isOpen = false }: MockComponentProps) => {
  return (
    <Modal isOpen={isOpen} onClose={() => {}}>
      <h1>Modal Example</h1>
    </Modal>
  )
}

describe(Modal.name, () => {
  afterEach(() => {
    jest.clearAllMocks()
    cleanup()
  })
  it('should not render initially children ', () => {
    render(<MockComponent />)

    expect(screen.queryByText(/Modal Example/i)).not.toBeInTheDocument()
  })
  it('should render children as expected if isOpen is true', () => {
    render(<MockComponent isOpen={true} />)

    expect(screen.getByText(/Modal Example/i)).toBeInTheDocument()
  })

  it('should not render children as expected if isOpen is false', () => {
    render(<MockComponent isOpen={false} />)

    expect(screen.queryByText(/Modal Example/i)).not.toBeInTheDocument()
  })
})
