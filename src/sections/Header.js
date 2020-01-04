import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Column, Flex } from "../shared/Flex"
import { Heading, Trafalgar } from "../shared/Typography"
import { TextIcon } from "../shared/TextIcon"
import { Icon } from "../shared/Icon"
import { TextIconLink } from "../shared/TextIconLink"
import { IconLinkButton } from "../shared/IconLinkButton"
import { Box } from "../shared/Box"
import media from "../shared/media"
import { Theme } from "../shared/theme"
import { useStaticQuery } from "gatsby"

const HeaderContainer = styled(Flex)`
  flex-wrap: wrap;
`

const ImageContainer = styled(Box)`
  width: 100%;
  max-width: 250px;

  ${media.greaterThan("mobile")`
    margin-bottom: ${Theme.space.regular}px;
    margin-right: ${Theme.space.regular}px;
  `}
`

const Image = styled(Img)`
  width: 100%;
  max-width: 100%;

  ${media.greaterThan("mobile")`
    max-width: 250px;
  `}
`

const IconLinkButtonContainer = styled(Box)`
  line-height: 1;

  a:not(:first-of-type) {
    margin-left: ${Theme.space.small}px;
  }
`

const Header = () => {
  const {
    profileImage,
    dataJson: {
      header: {
        name,
        position,
        location,
        email,
        phone,
        facebookUrl,
        linkedinUrl,
        stackoverflowUrl,
        githubUrl,
      },
    },
  } = useStaticQuery(query)

  return (
    <HeaderContainer as="section" mt={["regular", "regular", "regular", "regular"]}>
      <ImageContainer>
        <Image fluid={profileImage.childImageSharp.fluid} alt={name} />
      </ImageContainer>
      <Column>
        <Heading>{name}</Heading>
        <Trafalgar textStyle="bold" as="h2" mb={["small", "small", "small", "small"]}>
          {position}
        </Trafalgar>
        <Column mb={["small", "small", "small", "small"]}>
          {location && (
            <TextIcon>
              <Icon className="icon-location" />
              {location}
            </TextIcon>
          )}
          {email && (
            <TextIconLink rel="noopener noreferrer" target="_blank" href={`mailto:${email}`}>
              <Icon className="icon-envelope" />
              {email}
            </TextIconLink>
          )}
          {phone && (
            <TextIconLink rel="noopener noreferrer" target="_blank" href={`mailto:${phone}`}>
              <Icon className="icon-phone" />
              {phone}
            </TextIconLink>
          )}
        </Column>

        <IconLinkButtonContainer>
          {facebookUrl && (
            <IconLinkButton
              rel="noopener noreferrer"
              target="_blank"
              href={facebookUrl}
              iconClassName="icon-facebook2"
            />
          )}
          {linkedinUrl && (
            <IconLinkButton
              rel="noopener noreferrer"
              target="_blank"
              href={linkedinUrl}
              iconClassName="icon-linkedin"
            />
          )}
          {stackoverflowUrl && (
            <IconLinkButton
              rel="noopener noreferrer"
              target="_blank"
              href={stackoverflowUrl}
              iconClassName="icon-stackoverflow"
            />
          )}
          {githubUrl && (
            <IconLinkButton
              rel="noopener noreferrer"
              target="_blank"
              href={githubUrl}
              iconClassName="icon-github"
            />
          )}
        </IconLinkButtonContainer>
      </Column>
    </HeaderContainer>
  )
}

export default Header

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dataJson {
      header {
        name
        position
        location
        email
        phone
        facebookUrl
        linkedinUrl
        stackoverflowUrl
        githubUrl
      }
    }
  }
`
