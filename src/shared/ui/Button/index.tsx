import React from "react"
import styles from "./button.module.scss"

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  href?: string
  ref?: React.LegacyRef<HTMLAnchorElement>
  onClick?: () => void
}

const Button = React.forwardRef(
  (
    { children, style, onClick, href }: Props,
    ref: React.LegacyRef<HTMLAnchorElement>
  ) => (
    <a
      href={href || "#"}
      style={style}
      onClick={onClick}
      className={styles.button}
      ref={ref}
    >
      {children}
    </a>
  )
)

export { Button }
