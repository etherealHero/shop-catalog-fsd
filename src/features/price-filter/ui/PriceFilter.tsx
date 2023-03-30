import { colors } from "@/shared/constants"
import React from "react"
import styled from "styled-components"

type Props = {
  style?: React.CSSProperties
}

const PriceFilter = ({ style }: Props) => {
  return (
    <div style={style}>
      Цена <b style={{ color: colors.black, fontWeight: 500 }}>₸</b>
      <div style={{ marginTop: 16 }}>
        <InputStyled type="text" value={0} />
        <span style={{ margin: "0 10px" }}>-</span>
        <InputStyled type="text" value={1000} />
      </div>
    </div>
  )
}

const InputStyled = styled.input`
  display: inline-block;
  max-width: 100px;
  width: 100%;
  background-color: #ffefd2;
  color: ${colors.dark};
  padding: 4px 0;
  text-align: center;
  border-radius: 12px;
  border: 0;
  outline: none;
`

export { PriceFilter }
