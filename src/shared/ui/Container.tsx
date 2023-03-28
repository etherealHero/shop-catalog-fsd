import React from "react"
import styled from "styled-components"
import { device } from "../constants"

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>
}

const ContainerStyled = styled.div`
  max-width: calc(1366px + 24px);
  width: 100%;
  margin: 0 auto;

  padding: 0 12px;

  @media ${device.mobileL} {
    padding: 0 10px;
  }
`

export { Container }
