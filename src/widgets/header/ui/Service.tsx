import React from "react"
import serviceImg from "@/shared/assets/images/service.png"
import styled from "styled-components"
import { colors } from "@/shared"

type Props = {}

const Service = (props: Props) => {
  return (
    <ServiceStyled href="tel:+77774900091">
      <b style={{ color: colors.black }}>+7 (777) 490-00-91</b>
      <br />
      <span style={{ fontWeight: 300, fontSize: 12 }}>
        время работы: 9:00-20:00
      </span>
      <br />
      <u style={{ fontSize: 10 }}>Заказать звонок</u>
      <img src={serviceImg} alt="service" />
    </ServiceStyled>
  )
}

const ServiceStyled = styled.a`
  text-align: end;
  position: relative;
  padding-right: 84px;

  img {
    position: absolute;
    right: 0;
    top: -20px;
  }
`

export { Service }
