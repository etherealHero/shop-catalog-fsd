import styled from "styled-components"

import { Cart } from "@/entities"
import {
  Button,
  Callback,
  Contact,
  ContactList,
  Container,
  Input,
  Logo,
  NavItem,
  NavList,
  Separator,
} from "@/shared"
import {
  catalogIcon,
  downloadIcon,
  mailIcon,
  pinIcon,
  searchIcon,
} from "@/shared/assets/icons"
import callbackImg from "@/shared/assets/images/callback.png"

import { colors, device } from "@/shared/constants"
import { useMedia } from "@/shared/lib/hooks"

const Header = () => {
  const { isLaptopL, isTablet } = useMedia()

  return (
    <header>
      <HeaderTopWrapper>
        <Container>
          <HeaderTop>
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
          </HeaderTop>
        </Container>
      </HeaderTopWrapper>

      <Container>
        <HeaderWrapper>
          <Logo style={{ gridArea: "logo" }} />
          <Button style={{ gridArea: "catalog" }}>
            Каталог
            <img
              src={catalogIcon}
              alt="catalogIcon"
              style={{ marginLeft: 12 }}
            />
          </Button>
          <Input icon={searchIcon} style={{ gridArea: "search" }} />
          <Callback img={callbackImg} style={{ gridArea: "service" }} />
          {!isLaptopL && <Separator />}
          <Button style={{ gridArea: "price" }}>
            Прайс-лист
            <img
              src={downloadIcon}
              alt="downloadIcon"
              style={{ marginLeft: 12 }}
            />
          </Button>
          {!isLaptopL && <Separator />}
          <Cart
            count={3}
            style={{ gridArea: "cart" }}
            compact={isLaptopL && !isTablet}
          />
        </HeaderWrapper>
      </Container>
    </header>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;

  padding: 22px 0;

  @media ${device.tablet} {
    display: grid;
    justify-content: space-between;
    row-gap: 20px;

    grid-template-areas:
      "logo logo service service service service price"
      "cart cart search search search search catalog";
  }
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 10px;
`

const HeaderTopWrapper = styled.div`
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

export { Header as HeaderDesktop }
