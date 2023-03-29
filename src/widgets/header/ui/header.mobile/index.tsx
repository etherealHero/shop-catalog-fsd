import { useOutside } from "@/shared/lib/hooks"
import { Menu } from "./Menu"
import { Header } from "./Header"

const HeaderMobile = () => {
  const { ref, isShow, setIsShow, toggler } = useOutside(false)

  return (
    <>
      <header>
        <Header props={{ isShow, setIsShow, toggler }} />
        {isShow && <Menu ref={ref} />}
      </header>
    </>
  )
}

export { HeaderMobile }
