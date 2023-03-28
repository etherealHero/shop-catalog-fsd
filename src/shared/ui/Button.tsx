import React from "react"
import styled from "styled-components"
import { colors, device } from "../constants"

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
  href?: string
}

const Button = React.forwardRef(
  (
    { children, style, onClick, href, className }: Props,
    ref?: React.LegacyRef<HTMLAnchorElement>
  ) => (
    <a
      href={href || "#"}
      style={style}
      onClick={onClick}
      ref={ref}
      className={className}
    >
      {children}
    </a>
  )
)

const ButtonStyled = styled(Button)`
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

export { ButtonStyled as Button }
