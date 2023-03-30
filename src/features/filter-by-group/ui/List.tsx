import { colors } from "@/shared/constants"
import React from "react"
import styled from "styled-components"
import { data } from "../lib/fetch-data"

type Props = {}

const List = (props: Props) => {
  return (
    <ul>
      {data.map((title) => {
        return (
          <Li>
            <a href="#" style={{ padding: 6, marginLeft: "-6px" }}>
              {title}
            </a>
          </Li>
        )
      })}
    </ul>
  )
}

const Li = styled.li`
  color: ${colors.dark};
  margin-bottom: 14px;
`

export { List }
