import React from "react"
import styles from "./container.module.scss"

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  ref?: React.LegacyRef<HTMLDivElement>
}

const Container = React.forwardRef(
  ({ children, style }: Props, ref: React.LegacyRef<HTMLDivElement>) => (
    <div style={style} ref={ref} className={styles.container}>
      {children}
    </div>
  )
)

export { Container }
