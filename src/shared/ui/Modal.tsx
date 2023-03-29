import styled from "styled-components"

const Modal = () => {
  return <ModalStyled />
}

const ModalStyled = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1000;
`

export { Modal }
