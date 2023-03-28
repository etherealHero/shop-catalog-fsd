import styled from "styled-components"

import { Cart } from "@/entities"
import { Button, Container, Logo, Separator } from "@/shared"
import { catalogIcon, menuIcon, searchIcon } from "@/shared/assets/icons"
import { colors, device } from "@/shared/constants"
import { useMedia } from "@/shared/lib/hooks/useMedia"

const Header = () => {
  const { isMobileS } = useMedia()

  return (
    <>
      <HeaderTopWrapper>
        <HeaderTop>
          <Button style={{ padding: `${isMobileS ? "10px" : "16px"}` }}>
            <img
              src={menuIcon}
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
      <Container>lol</Container>
    </>
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
