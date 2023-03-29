import React from "react"
import styles from "./container.module.scss"

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  ref?: React.LegacyRef<HTMLDivElement>
  className?: string
}

const Container = React.forwardRef(
  (
    { children, style, className }: Props,
    ref: React.LegacyRef<HTMLDivElement>
  ) => (
    <div style={style} ref={ref} className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
)

export { Container }
