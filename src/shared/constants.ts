export enum colors {
  black = "#111111",
  dark = "#3F4E65",
  accent = "#FFC85E",
}

export enum device {
  desktop = "(min-width: 1366px)",
  laptop = "(max-width: 1366px)",
  laptopL = "(max-width: 1248px)",
  tablet = "(max-width: 1024px)",
  mobileL = "(max-width: 768px)",
  mobileM = "(max-width: 640px)",
  mobileS = "(max-width: 425px)",
  mobileXS = "(max-width: 320px)",
}

// XS < 320
// S > 320 < 425
// M > 425 < 640
// L > 640 < 768
// Tablet > 768 < 1024
// Laptop > 1024 < 1366
// Desktop > 1366
