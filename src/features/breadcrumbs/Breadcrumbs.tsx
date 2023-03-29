import { NavItem, NavList } from "@/shared"
import { colors, device } from "@/shared/constants"
import styled from "styled-components"
import React from "react"

type Props = {}

const Breadcrumbs = (props: Props) => {
  return (
    <NavList style={{ padding: "45px 0 50px" }}>
      <NavItemStyled title="Главная" />
      <NavItemStyled title="Косметика и гигиена" />
    </NavList>
  )
}

const NavItemStyled = styled(NavItem)`
  position: relative;

  :last-child a {
    margin-right: 0;
    opacity: 0.5;
  }

  :not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 7px;
    height: 16px;
    width: 0;

    display: block;
    border-right: 1px dashed ${colors.dark};
    opacity: 0.3;
  }

  a {
    margin: 0 10px;
  }
`

export { Breadcrumbs }
