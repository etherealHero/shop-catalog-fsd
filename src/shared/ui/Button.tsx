import React from "react"
import styled from "styled-components"
import { colors } from "../constants"

type Props = {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return <ButtonStyled href="#">{children}</ButtonStyled>
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
`

export { Button }
