import React from "react"

type Props = {
  title: string
  style?: React.CSSProperties
}

const NavHeader = ({ title, style }: Props) => {
  return (
    <h2 style={{ fontWeight: 600, fontSize: 20, margin: "0 0 19px", ...style }}>
      {title}
    </h2>
  )
}

export { NavHeader }
