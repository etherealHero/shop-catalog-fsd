import React from "react"
import styled from "styled-components"
import { breakHalfList } from "../lib/break-half-list"

import { data } from "../lib/fetch-data"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <Wrapper>
      <FilterByGroupStyled>
        {data.map((title) => {
          const [firstLine, secondLine] = breakHalfList(title)

          return (
            <FilterItem href="#">
              {firstLine}
              <br />
              {secondLine}
            </FilterItem>
          )
        })}
      </FilterByGroupStyled>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`

const FilterByGroupStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: stretch;
  column-gap: 10px;

  padding: 25px 0 30px;
`

const FilterItem = styled.a`
  display: inline-block;
  padding: 18px;
  box-shadow: 0px 15px 70px -11px rgba(43, 28, 1, 0.14);
  border-radius: 10px;

  flex-shrink: 0;

  text-align: center;
  line-height: 17px;
`

export { Navbar }
