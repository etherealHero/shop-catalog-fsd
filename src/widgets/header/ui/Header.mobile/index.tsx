import { useOutside } from "@/shared/lib/hooks"
import { Menu } from "./Menu"
import { Header } from "./Header"

const HeaderMobile = () => {
  const { ref, isShow, setIsShow, toggler } = useOutside(true)

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
