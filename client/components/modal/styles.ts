import styled from 'styled-components'

export const ModalContent = styled.div`
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 1020px;
  padding: 15px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: #fff;

  @media (max-width: 600px) {
    min-width: 840px;
    top: 100%;
    left: 140%;
  }
`
export const ImproveBackground = styled.div`
  z-index: 9998;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`
