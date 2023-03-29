import {
  Button,
  Contact,
  ContactList,
  Container,
  Modal,
  NavItem,
  NavList,
  Separator,
} from "@/shared"
import {
  downloadIcon,
  mailIcon,
  phoneFilledIcon,
  phoneIcon,
  pinIcon,
} from "@/shared/assets/icons"
import { useMedia } from "@/shared/lib/hooks"
import React from "react"

const Menu = React.forwardRef(
  (_, ref: React.LegacyRef<HTMLDivElement> | any) => {
    const { isMobileS } = useMedia()

    return (
      <>
        <Container
          ref={ref}
          style={{ position: "absolute", background: "#fff", zIndex: 100 }}
        >
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
          <h2 style={{ fontWeight: 600, fontSize: 20, margin: "25px 0 19px" }}>
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
        <Modal />
      </>
    )
  }
)

export { Menu }
