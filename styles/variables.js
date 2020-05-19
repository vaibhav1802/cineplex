const bps = {
  small: 576,
  medium: 768,
  large: 992,
  larger: 1040,
  xlarge: 1300,
  wide: 1559
}

export const maxWidth = "1200px"

export const breakpoint = {
  unitless: {
    ...bps
  },
  min: {
    small: `${bps.small}px`,
    medium: `${bps.medium}px`,
    large: `${bps.large}px`,
    larger: `${bps.larger}px`,
    xlarge: `${bps.xlarge}px`,
    wide: `${bps.wide}px`
  },
  max: {
    small: `${bps.small - 1}px`,
    medium: `${bps.medium - 1}px`,
    large: `${bps.large - 1}px`,
    larger: `${bps.larger - 1}px`,
    xlarge: `${bps.xlarge - 1}px`,
    wide: `${bps.wide - 1}px`
  }
}

export const colour = {
  white: "#FFFFFF",
  black: "#000000",
  grey: "#3C3C3C",
  mixGray: "#C8C8C8",
  lightGray: "#F5F5F5",
  springWood: "#F5F5F5",
  lochMara: "#0071BF",
  cerulean: "#1293D4",
  robinEggBlue: "#00C3B2"
}

export const font = {
  size: {
    desktop: {
      base: "15px",
      h1: "44px",
      h2: "34px",
      h3: "20px",
      p1: "15px",
      p2: "14px",
      p3: "12px",
      p4: "10px"
    },
    mobile: {
      base: "15px",
      h1: "44px",
      h2: "34px",
      h3: "20px",
      p1: "15px",
      p2: "14px",
      p3: "12px",
      p4: "10px"
    }
  },
  weight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    book: 400,
    medium: 500,
    bold: 600,
    black: 700,
    ultra: 800
  }
}
