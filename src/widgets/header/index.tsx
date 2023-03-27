import { colors, Container } from "@/shared"
import styled from "styled-components"
import { Contacts } from "./ui/Contacts"
import { Nav } from "./ui/Nav"

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
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </HeaderStyled>
      </Container>
    </>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
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

export { Header }
