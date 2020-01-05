export const breakpoints = ["490px", "1040px", "1920px", "3824px"]

export const space = [0, 3.5, 7, 14, 21, 28, 35, 42]

space.none = space[0]
space.xxsmall = space[1]
space.xsmall = space[2]
space.small = space[3]
space.medium = space[4]
space.regular = space[5]
space.xregular = space[6]
space.large = space[7]
space.auto = "auto"

export const colors = {
  main: "#495057",
  mainLight: "#adb5bd",
  white: "#ffffff",
}

export const fontFamilies = {
  body:
    "'Noto Sans', 'Segoe UI', Roboto, Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;",
}

export const textStyles = {
  heading: {
    tag: "h1",
    fontSize: [30.8, 30.8, 30.8, 30.8],
    fontFamily: fontFamilies.body,
  },
  canon: {
    tag: "h2",
    fontSize: [22.4, 22.4, 22.4, 22.4],
    fontFamily: fontFamilies.body,
  },
  trafalgar: {
    tag: "h3",
    fontSize: [16.8, 16.8, 16.8, 16.8],
    fontFamily: fontFamilies.body,
  },
  bodyText: {
    tag: "p",
    fontSize: [14, 14, 14, 14],
    fontFamily: fontFamilies.body,
  },
  bold: {
    fontWeight: 700,
  },
}

export const Theme = {
  space,
  colors,
  breakpoints,
  textStyles,
  fontFamilies,
}
