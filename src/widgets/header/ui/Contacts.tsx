import { colors } from "@/shared"
import styled from "styled-components"
import mailIcon from "@/shared/assets/icons/mail.svg"
import pinIcon from "@/shared/assets/icons/pin.svg"

type Props = {}

const Contacts = (props: Props) => {
  return (
    <ContactsStyled>
      <Contact href="#">
        <img src={pinIcon} alt="pinIcon" />
        <span>
          <b style={{ color: colors.black }}>
            г. Кокчетав, ул. Ж. Ташенова 129Б
          </b>
          <br />
          (Рынок Восточный)
        </span>
      </Contact>
      <Contact href="#">
        <img src={mailIcon} alt="mailIcon" />
        <span>
          <b style={{ color: colors.black }}>opt.sultan@mail.ru</b>
          <br />
          На связи в любое время
        </span>
      </Contact>
    </ContactsStyled>
  )
}

const ContactsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 40px;
`

const Contact = styled.a`
  display: inline-flex;
  align-items: center;
  column-gap: 15px;

  :hover {
    text-decoration: underline;
  }
`

export { Contacts }
