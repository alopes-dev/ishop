import styled from 'styled-components'

export const ModalContent = styled.div`
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 1020px;
  /* min-height: 100px; */
  padding: 15px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: #fff;
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