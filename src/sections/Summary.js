import React from "react"
import { useStaticQuery } from "gatsby"
import { BodyText } from "../shared/Typography"
import { Box } from "../shared/Box"
import SectionCanon from "../shared/SectionCanon"

const Summary = () => {
  const {
    dataJson: { summary },
  } = useStaticQuery(query)

  return (
    <Box as="section">
      <SectionCanon>Summary</SectionCanon>
      <Box mb={["regular", "regular", "regular", "regular"]}>
        <BodyText>{summary}</BodyText>
      </Box>
    </Box>
  )
}

export default Summary

export const query = graphql`
  query {
    dataJson {
      summary
    }
  }
`
