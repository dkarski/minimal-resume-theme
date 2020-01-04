import React from "react"
import { Theme } from "./src/shared/theme"
import { ServerStyleSheet, ThemeProvider } from "styled-components"
import { renderToString } from "react-dom/server"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  // React Context in SSR/build
  const BodyWithProviders = () => <ThemeProvider theme={Theme}>{bodyComponent}</ThemeProvider>
  replaceBodyHTMLString(renderToString(<BodyWithProviders />))

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet()
  const _bodyHTML = renderToString(sheet.collectStyles(<BodyWithProviders />))
  const styleElement = sheet.getStyleElement()
  setHeadComponents(styleElement)
}
