import { useMedia } from "@/shared/lib/hooks"
import { HeaderDesktop } from "./ui/header.desktop"
import { HeaderMobile } from "./ui/header.mobile"

const Header = () => {
  const { isMobileL } = useMedia()

  if (!isMobileL) return <HeaderDesktop />

  return <HeaderMobile />
}

export { Header }
