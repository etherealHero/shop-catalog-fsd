import React from "react"
import styled from "styled-components"
import { colors, device } from "../constants"

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Button = ({ children, style }: Props) => {
  return (
    <ButtonStyled href="#" style={style}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 22px 54px;
  background-color: ${colors.accent};
  border-radius: 79px;

  font-weight: 700;
  color: #fff;

  flex-shrink: 0;

  @media ${device.laptopL} {
    padding: 22px 32px;
  }
`

export { Button }
