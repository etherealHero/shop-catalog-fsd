import React from "react"
import cartIcon from "@/shared/assets/icons/cart.svg"
import { colors } from "@/shared"
import styled from "styled-components"

type Props = {
  count: number
}

const Cart = ({ count }: Props) => {
  return (
    <CartStyled href="#">
      <div style={{ position: "relative" }}>
        <img src={cartIcon} alt="cart" />
        <Badge>{count}</Badge>
      </div>

      <div style={{ fontWeight: 300 }}>
        <p>Корзина</p>
        <b style={{ color: colors.black, fontWeight: 600 }}>12 478 ₸ </b>
      </div>
    </CartStyled>
  )
}

const CartStyled = styled.a`
  display: flex;
  align-items: center;
  column-gap: 24px;
`

const Badge = styled.div`
  background-color: ${colors.accent};
  border: 2px solid #fff;
  border-radius: 13px;

  position: absolute;
  right: 20px;
  top: 0;
  transform: translate3d(100%, 0, 0);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  min-width: 26px;
  min-height: 26px;

  font-weight: 700;
  color: #fff;
`

export { Cart }
