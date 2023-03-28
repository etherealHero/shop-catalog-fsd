import { device } from "@/shared/constants"
import { useMediaQuery } from "react-responsive"

const useMedia = () => ({
  isDesktop: useMediaQuery({ query: device.desktop }),
  isLaptop: useMediaQuery({ query: device.laptop }),
  isLaptopL: useMediaQuery({ query: device.laptopL }),
  isTablet: useMediaQuery({ query: device.tablet }),
  isMobileL: useMediaQuery({ query: device.mobileL }),
  isMobileM: useMediaQuery({ query: device.mobileM }),
  isMobileS: useMediaQuery({ query: device.mobileS }),
  isMobileXS: useMediaQuery({ query: device.mobileXS }),
})

export { useMedia }
