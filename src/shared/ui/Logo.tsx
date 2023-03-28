import LogoIcon from "../assets/icons/logo.svg"
import React from "react"

type Props = {
  style?: React.CSSProperties
}

const Logo = ({ style }: Props) => {
  return (
    <a href="#" style={style}>
      <img src={LogoIcon} alt="Logo" />
    </a>
  )
}

export { Logo }
