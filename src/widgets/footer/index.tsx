import { useMedia } from "@/shared/lib/hooks"
import { FooterDesktop } from "./ui/footer.desktop"
import { FooterMobile } from "./ui/footer.mobile"

const Footer = () => {
  const { isMobileS } = useMedia()

  if (isMobileS) return <FooterMobile />

  return <FooterDesktop />
}

export { Footer }
