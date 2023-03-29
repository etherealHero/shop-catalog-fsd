import React from "react"
import { logoAltIcon, logoIcon } from "../assets/icons"

type Props = {
  style?: React.CSSProperties
  invert?: boolean
}

const Logo = ({ style, invert }: Props) => {
  return (
    <a href="#" style={style}>
      <img src={invert ? logoAltIcon : logoIcon} alt="Logo" />
    </a>
  )
}

export { Logo }
