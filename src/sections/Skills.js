import React from "react"
import { useStaticQuery } from "gatsby"
import { BodyText, Trafalgar } from "../shared/Typography"
import { Box } from "../shared/Box"
import SectionCanon from "../shared/SectionCanon"

const Skills = () => {
  const {
    dataJson: { skillGroups },
  } = useStaticQuery(query)

  return (
    <Box as="section">
      <SectionCanon>Skills</SectionCanon>
      {skillGroups.map(({ groupName, skills }) => (
        <Box mb={["regular", "regular", "regular", "regular"]}>
          <Trafalgar textStyle="bold" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
            {groupName}
          </Trafalgar>
          <BodyText>{skills}</BodyText>
        </Box>
      ))}
    </Box>
  )
}

export default Skills

export const query = graphql`
  query {
    dataJson {
      skillGroups {
        groupName
        skills
      }
    }
  }
`
