import { Contact, ContactList, Container, NavItem, NavList } from "@/shared"
import { mailIcon, pinIcon } from "@/shared/assets/icons"
import { colors, device } from "@/shared/constants"
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
            <NavItemStyled title="О компании" />
            <NavItemStyled title="Доставка и оплата" />
            <NavItemStyled title="Возврат" />
            <NavItemStyled title="Контакты" />
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

const NavItemStyled = styled(NavItem)`
  position: relative;

  :last-child a {
    margin-right: 0;
  }

  :not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0px;
    height: 29px;
    width: 0;

    display: block;
    border-right: 1px dashed ${colors.dark};
    opacity: 0.1;
  }

  a {
    margin: 0 30px;

    @media ${device.laptopL} {
      margin: 0 10px;
    }

    @media ${device.mobileL} {
      margin: 0 0 0 -6px;
    }
  }
`

export { Navbar }
