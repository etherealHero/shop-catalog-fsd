import styled from "styled-components"

import { Cart } from "@/entities"
import { Button, Callback, Container, Input, Logo, Separator } from "@/shared"
import { catalogIcon, downloadIcon, searchIcon } from "@/shared/assets/icons"
import callbackImg from "@/shared/assets/images/callback.png"

import { device } from "@/shared/constants"
import { useMedia } from "@/shared/lib/hooks"

const Header = () => {
  const { isLaptopL, isTablet } = useMedia()

  return (
    <Container>
      <HeaderWrapper>
        <Logo style={{ gridArea: "logo" }} />
        <Button style={{ gridArea: "catalog" }}>
          Каталог
          <img src={catalogIcon} alt="catalogIcon" style={{ marginLeft: 12 }} />
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

export { Header }
