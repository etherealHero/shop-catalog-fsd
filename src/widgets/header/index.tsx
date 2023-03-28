import { useMedia } from "@/shared/lib/hooks/useMedia"
import { HeaderDesktop } from "./ui/Header.desktop"
import { HeaderMobile } from "./ui/Header.mobile"

const Header = () => {
  const { isMobileL } = useMedia()

  if (!isMobileL) return <HeaderDesktop />

  return <HeaderMobile />
}

export { Header }
