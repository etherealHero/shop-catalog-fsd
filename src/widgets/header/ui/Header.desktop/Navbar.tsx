import { Contact, ContactList, Container, NavItem, NavList } from "@/shared"
import { mailIcon, pinIcon } from "@/shared/assets/icons"
import { colors } from "@/shared/constants"
import styled from "styled-components"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <NavbarStyled>
      <Container>
        <NavbarInner>
          <ContactList>
            <Contact
              title="г. Кокчетав, ул. Ж. Ташенова 129Б"
              subtitle="(Рынок Восточный)"
              icon={pinIcon}
            />
            <Contact
              title="opt.sultan@mail.ru"
              subtitle="На связи в любое время"
              icon={mailIcon}
            />
          </ContactList>
          <NavList>
            <NavItem title="О компании" />
            <NavItem title="Доставка и оплата" />
            <NavItem title="Возврат" />
            <NavItem title="Контакты" />
          </NavList>
        </NavbarInner>
      </Container>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
  position: relative;
  padding: 13px 0;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    border-bottom: 1px solid ${colors.dark};
    opacity: 0.2;
  }
`
const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 10px;
`

export { Navbar }
