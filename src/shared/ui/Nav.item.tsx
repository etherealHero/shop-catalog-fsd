import { colors } from "@/shared/constants"
import styled from "styled-components"

type Props = {
  title: string
  to?: string
  className?: string
}

const NavItem = ({ title, to, className }: Props) => {
  return (
    <NavItemStyled className={className}>
      <NavLink href={to || "#"}>{title}</NavLink>
    </NavItemStyled>
  )
}

const NavItemStyled = styled.li`
  flex-shrink: 0;
`

const NavLink = styled.a`
  padding: 6px;
  margin-left: -6px;
  display: inline-block;

  transition: 0.1s color ease;

  :hover {
    color: ${colors.accent};
  }
`

export { NavItem }
