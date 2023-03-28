import styled from "styled-components"

import { Cart } from "@/entities"
import {
  Button,
  Contact,
  ContactList,
  Container,
  Logo,
  NavItem,
  NavList,
  Separator,
} from "@/shared"
import {
  catalogIcon,
  downloadIcon,
  mailIcon,
  menuAltIcon,
  menuIcon,
  phoneFilledIcon,
  phoneIcon,
  pinIcon,
  searchIcon,
} from "@/shared/assets/icons"
import { colors, device } from "@/shared/constants"
import { useEffect, useState } from "react"
import { useMedia, useOutside } from "@/shared/lib/hooks"

const Header = () => {
  const { isMobileS } = useMedia()
  const { ref, isShow, setIsShow, toggler } = useOutside(true)

  return (
    <header>
      <HeaderTopWrapper>
        <HeaderTop>
          <Button
            style={{
              padding: `${isMobileS ? "10px" : "16px"}`,
            }}
            onClick={() => setIsShow(!isShow)}
            ref={toggler}
          >
            <img
              src={isShow ? menuAltIcon : menuIcon}
              alt="menu"
              style={{ transform: `${isMobileS ? "" : "scale(1.6)"}` }}
            />
          </Button>

          <Logo style={{ transform: `${isMobileS ? "scale(0.8)" : ""}` }} />
          <Cart
            count={3}
            compact
            style={{ transform: `${isMobileS ? "scale(0.8)" : ""}` }}
          />
        </HeaderTop>
      </HeaderTopWrapper>
      <HeaderWrapper>
        <Button>
          <img
            src={catalogIcon}
            alt="catalogIcon"
            style={{ marginRight: 12 }}
          />
          Каталог
        </Button>
        <Separator />
        <Button>
          <img src={searchIcon} alt="searchIcon" style={{ marginRight: 12 }} />
          Поиск
        </Button>
      </HeaderWrapper>
      {isShow && (
        <div ref={ref}>
          <Container style={{ position: "absolute", background: "#fff" }}>
            <ContactList style={{ paddingTop: 20 }}>
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
              <Contact
                title="Отдел продаж"
                subtitle="+7 (777) 490-00-91"
                icon={phoneIcon}
              />
              <span
                style={{
                  fontWeight: 300,
                  fontSize: 12,
                  marginLeft: 32,
                  marginTop: "-10px",
                }}
              >
                время работы: 9:00-20:00
              </span>
              <div>
                <Button
                  style={{
                    padding: `${isMobileS ? "10px" : "12px"}`,
                    marginRight: 8,
                  }}
                  href="tel:89009005050"
                >
                  <img
                    src={phoneFilledIcon}
                    alt="phone"
                    style={{ transform: `${isMobileS ? "" : " scale(1.2)"}` }}
                  />
                </Button>
                <u style={{ fontSize: 10 }}>Заказать звонок</u>
              </div>
              <Separator style={{ width: "100%", height: 1, marginTop: 15 }} />
            </ContactList>
            <h2
              style={{ fontWeight: 600, fontSize: 20, margin: "25px 0 19px" }}
            >
              Меню сайта:
            </h2>
            <NavList vertical>
              <NavItem title="О компании" />
              <NavItem title="Доставка и оплата" />
              <NavItem title="Возврат" />
              <NavItem title="Контакты" />
            </NavList>
            <Button style={{ margin: "16px 0 32px", width: "100%" }}>
              Прайс-лист
              <img
                src={downloadIcon}
                alt="downloadIcon"
                style={{ marginLeft: 12 }}
              />
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: stretch;
  width: 100%;
  column-gap: 0;
  padding: 0;

  position: relative;

  a {
    flex: 1;
    background-color: #fff;
    color: ${colors.dark};
    border-radius: 0;

    img {
      filter: invert();
    }
  }

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

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 10px;
`

const HeaderTopWrapper = styled.div`
  position: relative;
  padding: 10px 14px;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    border-bottom: 1px solid ${colors.dark};
    opacity: 0.2;
  }

  @media ${device.mobileS} {
    padding: 4px 10px;
  }
`

export { Header as HeaderMobile }
