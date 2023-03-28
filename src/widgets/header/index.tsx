import { useMedia } from "@/shared/lib/hooks"
import { HeaderDesktop } from "./ui/Header.desktop"
import { HeaderMobile } from "./ui/Header.mobile"

const Header = () => {
  const { isMobileL } = useMedia()

  if (!isMobileL) return <HeaderDesktop />

  return <HeaderMobile />
}

export { Header }
