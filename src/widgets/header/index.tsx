import { Cart } from "@/entities"
import { Button, colors, Container, Input, Logo } from "@/shared"
import catalogIcon from "@/shared/assets/icons/catalog.svg"
import downloadIcon from "@/shared/assets/icons/download.svg"
import searchIcon from "@/shared/assets/icons/search.svg"

import { Contacts } from "./ui/Contacts"
import { Nav } from "./ui/Nav"
import { Service } from "./ui/Service"
import styled from "styled-components"

const Header = () => {
  return (
    <>
      <HeaderTopWrapper>
        <Container>
          <HeaderTop>
            <Contacts />
            <Nav />
          </HeaderTop>
        </Container>
      </HeaderTopWrapper>

      <Container>
        <HeaderStyled>
          <Logo />
          <Button>
            Каталог{" "}
            <img
              src={catalogIcon}
              alt="catalogIcon"
              style={{ marginLeft: 12 }}
            />
          </Button>
          <Input icon={searchIcon} />
          <Service />
          <Separator />
          <Button>
            Прайс-лист{" "}
            <img
              src={downloadIcon}
              alt="downloadIcon"
              style={{ marginLeft: 12 }}
            />
          </Button>
          <Separator />
          <Cart count={3} />
        </HeaderStyled>
      </Container>
    </>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 10px;
  padding: 22px 0;
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Separator = styled.div`
  height: 50px;
  width: 0;

  border-right: 1px dashed ${colors.dark};
  opacity: 0.1;
`

export { Header }
