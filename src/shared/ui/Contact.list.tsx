import React from "react"
import styled from "styled-components"
import { device } from "../constants"

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const ContactList = ({ children, style }: Props) => {
  return <ContactListStyled style={style}>{children}</ContactListStyled>
}

const ContactListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 40px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: start;
    row-gap: 12px;
  }
`

export { ContactList }
