import { colors, device } from "@/shared/constants"
import styled from "styled-components"

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLink href="#">О компании</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Доставка и оплата</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Возврат</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Контакты</NavLink>
        </NavItem>
      </NavList>
    </nav>
  )
}

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
`
const NavItem = styled.li`
  position: relative;
  flex-shrink: 0;

  :last-child a {
    margin-right: 0;
  }

  :not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: -4px;
    height: 29px;
    width: 0;

    display: block;
    border-right: 1px dashed ${colors.dark};
    opacity: 0.1;
  }
`

const NavLink = styled.a`
  padding: 6px;
  margin: 0 30px;

  transition: 0.1s color ease;

  :hover {
    color: ${colors.accent};
  }

  @media ${device.laptopL} {
    margin: 0 10px;
  }
`

export { Nav }
