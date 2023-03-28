import React from "react"
import styled from "styled-components"

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Heading = ({ children, style }: Props) => {
  return <HeadingStyled style={style}>{children}</HeadingStyled>
}

const HeadingStyled = styled.h3`
  font-weight: 600;
  font-size: 20px;
`

export { Heading }
