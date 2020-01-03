import React from "react"
import { useStaticQuery } from "gatsby"
import { BodyText, Trafalgar } from "../shared/Typography"
import { Box } from "../shared/Box"
import { List } from "../shared/List"
import SectionCanon from "../shared/SectionCanon"

const Experience = () => {
  const {
    dataJson: { experiences },
  } = useStaticQuery(query)

  return (
    <Box as="section">
      <SectionCanon>Professional Experience</SectionCanon>
      {experiences.map(({ title, date, roles }) => (
        <Box mb={["regular", "regular", "regular", "regular"]}>
          <Trafalgar textStyle="bold" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
            {title}
          </Trafalgar>
          <BodyText className="light" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
            {date}
          </BodyText>
          <List>
            {roles.map(role => (
              <li>{role}</li>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  )
}

export default Experience

export const query = graphql`
  query {
    dataJson {
      experiences {
        title
        date
        roles
      }
    }
  }
`
