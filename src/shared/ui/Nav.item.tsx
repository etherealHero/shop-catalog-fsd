import { colors, device } from "@/shared/constants"
import styled from "styled-components"

type Props = {
  title: string
  to?: string
}

const NavItem = ({ title, to }: Props) => {
  return (
    <NavItemStyled>
      <NavLink href={to || "#"}>{title}</NavLink>
    </NavItemStyled>
  )
}

const NavItemStyled = styled.li`
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
  display: inline-block;

  transition: 0.1s color ease;

  :hover {
    color: ${colors.accent};
  }

  @media ${device.laptopL} {
    margin: 0 10px;
  }

  @media ${device.mobileL} {
    margin: 0 0 0 -6px;
  }
`

export { NavItem }
