import styled from "styled-components"

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  vertical?: boolean
}

const NavList = ({ children, style, vertical }: Props) => {
  return (
    <nav>
      <NavListStyled style={style} vertical={vertical}>
        {children}
      </NavListStyled>
    </nav>
  )
}

const NavListStyled = styled.ul<Props>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  row-gap: 20px;
`

export { NavList }
