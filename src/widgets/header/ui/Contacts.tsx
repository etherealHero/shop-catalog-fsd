import styled from "styled-components"
import mailIcon from "@/shared/assets/icons/mail.svg"
import pinIcon from "@/shared/assets/icons/pin.svg"
import { colors, device } from "@/shared/constants"
import { useMedia } from "@/shared/lib/hooks/useMedia"

const Contacts = () => {
  const { isLaptopL, isTablet } = useMedia()

  return (
    <ContactsStyled>
      <Contact href="#">
        <img src={pinIcon} alt="pinIcon" />
        <span>
          <b style={{ color: colors.black }}>
            г. Кокчетав, {isLaptopL && !isTablet && <br />} ул. Ж. Ташенова 129Б
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
          На связи {isLaptopL && !isTablet && <br />} в любое время
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

  @media ${device.tablet} {
    flex-direction: column;
    align-items: start;
    row-gap: 12px;
  }
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
