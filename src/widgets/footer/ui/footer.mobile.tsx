import {
  Button,
  Contact,
  Input,
  Logo,
  NavItem,
  NavList,
  Callback,
  NavHeader,
  Container,
} from "@/shared"
import {
  arrowRightIcon,
  downloadIcon,
  masterCardIcon,
  telegramIcon,
  visaIcon,
  whatsupIcon,
} from "@/shared/assets/icons"
import { colors } from "@/shared/constants"
import styles from "./footer.module.scss"

type Props = {}

const FooterMobile = (props: Props) => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.containerMobile}>
          <Logo
            invert
            style={{
              gridArea: "logo",
              transform: "scale(0.8)",
              marginLeft: "-14px",
            }}
          />

          <Button
            style={{
              gridArea: "price",
              padding: "12px 20px",
              fontSize: 12,
              alignSelf: "center",
            }}
          >
            Прайс-лист
            <img
              src={downloadIcon}
              alt="downloadIcon"
              style={{ marginLeft: 12 }}
            />
          </Button>

          <div style={{ gridArea: "subscribe" }}>
            <p
              style={{
                fontSize: 16,
                lineHeight: "150%",
                margin: "15px 0 45px",
              }}
            >
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </p>
            <p style={{ fontSize: 12, marginBottom: 14 }}>
              Подпишись на скидки и акции
            </p>
            <Input
              icon={arrowRightIcon}
              placeholder="Введите ваш E-mail"
              style={{ color: colors.black }}
            />
          </div>

          <div style={{ gridArea: "menu" }}>
            <NavHeader title="Меню сайта:" />
            <NavList vertical>
              <NavItem title="О компании" />
              <NavItem title="Доставка и оплата" />
              <NavItem title="Возврат" />
              <NavItem title="Контакты" />
            </NavList>
          </div>

          <div style={{ gridArea: "category" }}>
            <NavHeader title="Категории:" />
            <NavList vertical>
              <NavItem title="Бытовая химия" />
              <NavItem title="Косметика и гигиена" />
              <NavItem title="Товары для дома" />
              <NavItem title="Товары для детей и мам" />
              <NavItem title="Посуда" />
            </NavList>
          </div>

          <div style={{ gridArea: "contacts" }}>
            <NavHeader title="Контакты:" style={{ margin: "0 0 25px" }} />
            <NavList vertical style={{ rowGap: 25 }}>
              <Callback titleColor="#fff" />
              <Contact
                title="opt.sultan@mail.ru"
                titleColor="#fff"
                subtitle="На связи в любое время"
              />
              <p>
                <img src={visaIcon} alt="visa" style={{ marginRight: 6 }} />
                <img src={masterCardIcon} alt="mastercard" />
              </p>
            </NavList>
          </div>

          <div style={{ gridArea: "social" }}>
            <p style={{ marginBottom: 15 }}>Связь в мессенджерах:</p>
            <p>
              <img
                src={whatsupIcon}
                alt="whatup"
                style={{ marginRight: 10, cursor: "pointer" }}
              />
              <img
                src={telegramIcon}
                alt="telegram"
                style={{ cursor: "pointer" }}
              />
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export { FooterMobile }
