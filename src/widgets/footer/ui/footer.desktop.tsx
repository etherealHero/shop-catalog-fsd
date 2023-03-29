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

const FooterDesktop = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.containerDesktop}>
          <div>
            <Logo invert />
            <p className={styles.p}>
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </p>
            <p className={styles.pSubscribe}>Подпишись на скидки и акции</p>
            <Input
              icon={arrowRightIcon}
              placeholder="Введите ваш E-mail"
              style={{ color: colors.black }}
            />
          </div>

          <div>
            <NavHeader title="Меню сайта:" />
            <NavList vertical>
              <NavItem title="О компании" />
              <NavItem title="Доставка и оплата" />
              <NavItem title="Возврат" />
              <NavItem title="Контакты" />
            </NavList>
          </div>

          <div>
            <NavHeader title="Категории:" />
            <NavList vertical>
              <NavItem title="Бытовая химия" />
              <NavItem title="Косметика и гигиена" />
              <NavItem title="Товары для дома" />
              <NavItem title="Товары для детей и мам" />
              <NavItem title="Посуда" />
            </NavList>
          </div>

          <div>
            <NavHeader
              title="Скачать прайс-лист:"
              style={{ margin: "0 0 25px" }}
            />
            <NavList vertical style={{ rowGap: 25 }}>
              <Button>
                Прайс-лист
                <img
                  src={downloadIcon}
                  alt="downloadIcon"
                  style={{ marginLeft: 12 }}
                />
              </Button>
              <div>
                <p style={{ marginBottom: 15 }}>Связь в мессенджерах:</p>
                <p>
                  <img
                    src={whatsupIcon}
                    alt="whatsup"
                    style={{ marginRight: 10, cursor: "pointer" }}
                  />
                  <img
                    src={telegramIcon}
                    alt="telegram"
                    style={{ cursor: "pointer" }}
                  />
                </p>
              </div>
            </NavList>
          </div>

          <div>
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
        </div>
      </Container>
    </footer>
  )
}

export { FooterDesktop }
