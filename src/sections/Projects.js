import React from "react"
import { useStaticQuery } from "gatsby"
import { BodyText, Trafalgar } from "../shared/Typography"
import { Box } from "../shared/Box"
import SectionCanon from "../shared/SectionCanon"

const Projects = () => {
  const {
    dataJson: { projects },
  } = useStaticQuery(query)

  return (
    <Box as="section">
      <SectionCanon>Best Project</SectionCanon>
      {projects.map(({ title, role, description }) => (
        <Box mb={["regular", "regular", "regular", "regular"]}>
          <Trafalgar textStyle="bold" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
            {title}
          </Trafalgar>
          <BodyText className="light" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
            {role}
          </BodyText>
          <BodyText>{description}</BodyText>
        </Box>
      ))}
    </Box>
  )
}

export default Projects

export const query = graphql`
  query {
    dataJson {
      projects {
        title
        role
        description
      }
    }
  }
`
