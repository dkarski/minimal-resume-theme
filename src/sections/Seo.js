import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery } from "gatsby"

const title = "Minimal Resume Theme"
const description = "Gatsby.js & Styled Components - Minimal Resume Theme"

const Seo = () => {
  const { profileImage } = useStaticQuery(query)

  return (
    <Helmet defaultTitle={title}>
      <html lang="en-US" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="referrer" content="origin" />

      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Description */}
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />

      {/* Image */}
      <meta property="og:image" content={profileImage.childImageSharp.fluid.src} />
      <meta name="twitter:image" content={profileImage.childImageSharp.fluid.src} />
      <meta property="og:image:width" content="250" />
      <meta property="og:image:height" content="250" />
      <meta property="og:image:alt" content={title} />

      {/* Type */}
      <meta property="og:type" content="website" />

      {/* Author */}
      <meta name="author" content="Daniel Karski" />
    </Helmet>
  )
}

export default Seo

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
