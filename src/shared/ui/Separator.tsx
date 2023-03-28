import React from "react"
import styled from "styled-components"
import { colors } from "../constants"

type Props = {
  style?: React.CSSProperties
}

const Separator = ({ style }: Props) => {
  return <SeparatorStyled style={style} />
}

const SeparatorStyled = styled.div`
  height: 50px;
  width: 0;

  border: 1px dashed ${colors.dark};
  opacity: 0.1;
`

export { Separator }
