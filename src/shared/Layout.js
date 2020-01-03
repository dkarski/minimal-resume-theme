/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import { Box } from "./Box"

const Container = styled(Box)`
  max-width: 692px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
