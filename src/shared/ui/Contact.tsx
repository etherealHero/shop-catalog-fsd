import styled from "styled-components"
import { colors } from "../constants"

type Props = {
  title: string
  subtitle: string
  icon?: string
}

const Contact = ({ title, subtitle, icon }: Props) => {
  return (
    <ContactStyled href="#">
      {icon && <img src={icon} alt="contact" />}
      <span>
        <b style={{ color: colors.black }}>{title}</b>
        <br />
        {subtitle}
      </span>
    </ContactStyled>
  )
}

const ContactStyled = styled.a`
  display: inline-flex;
  align-items: center;
  column-gap: 15px;

  :hover {
    text-decoration: underline;
  }
`

export { Contact }
