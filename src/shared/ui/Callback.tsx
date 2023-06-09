import React from "react"
import styled from "styled-components"
import { colors } from "@/shared/constants"

type Props = {
  style?: React.CSSProperties
  titleColor?: string
  img?: string
}

const Callback = ({ style, img, titleColor }: Props) => {
  return (
    <CallbackStyled href="tel:+77774900091" style={style} img={img}>
      <b style={{ color: `${titleColor || colors.black}` }}>
        +7 (777) 490-00-91
      </b>
      <br />
      <span style={{ fontWeight: 300, fontSize: 12 }}>
        время работы: 9:00-20:00
      </span>
      <br />
      <u style={{ fontSize: 10 }}>Заказать звонок</u>
      {img && <img src={img} alt="Callback" />}
    </CallbackStyled>
  )
}

const CallbackStyled = styled.a<Props>`
  position: relative;
  padding-right: ${(props) => (props.img ? "84px" : "0")};

  flex-shrink: 0;

  img {
    position: absolute;
    right: 0;
    top: -20px;
  }
`

export { Callback }
