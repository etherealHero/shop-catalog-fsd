import styles from "./header.module.scss"

import { Cart } from "@/entities"
import { Button, Logo, Separator } from "@/shared"
import {
  catalogIcon,
  menuAltIcon,
  menuIcon,
  searchIcon,
} from "@/shared/assets/icons"
import { useMedia, UseOutSideTypes } from "@/shared/lib/hooks"

type Props = {
  props: Omit<UseOutSideTypes, "ref">
}

const Header = ({ props }: Props) => {
  const { isShow, setIsShow, toggler } = props
  const { isMobileS } = useMedia()

  return (
    <>
      <div className={styles.topWrapper}>
        <div className={styles.top}>
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
        </div>
      </div>
      <div className={styles.wrapper}>
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
      </div>
    </>
  )
}

export { Header }
