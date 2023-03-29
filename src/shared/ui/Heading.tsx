import React from "react"
import styled from "styled-components"
import { colors } from "../constants"

type Props = {
  title: string
  style?: React.CSSProperties
}

const Heading = ({ title, style }: Props) => {
  return <HeadingStyled style={style}>{title}</HeadingStyled>
}

const HeadingStyled = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 40px;
  color: ${colors.black};
`

export { Heading }
