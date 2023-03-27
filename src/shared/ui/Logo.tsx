import LogoIcon from "../assets/icons/logo.svg"
import React from "react"

type Props = {}

const Logo = (props: Props) => {
  return (
    <a href="#">
      <img src={LogoIcon} alt="Logo" />
    </a>
  )
}

export { Logo }
