// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isModalOpen: false }
//   }

import { FC } from 'react'
import { ImproveBackground, ModalContent } from './styles'

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.openModal()}>Open modal</button>
//         <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
//           <h3>Modal title</h3>
//           <p>Content</p>
//         </Modal>
//       </div>
//     )
//   }

//   openModal() {
//     this.setState({ isModalOpen: true })
//   }

//   closeModal() {
//     this.setState({ isModalOpen: false })
//   }
// }

type ModalProps = {
  isOpen: boolean
  onClose(): void
}
const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  function handleClose() {
    if (onClose) {
      onClose()
    }
  }

  if (isOpen === false) return null

  return (
    <div>
      <ModalContent>{children}</ModalContent>
      <ImproveBackground onClick={handleClose} />
    </div>
  )
}

export default Modal
