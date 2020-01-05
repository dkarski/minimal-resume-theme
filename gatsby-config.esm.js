import * as path from "path"
import { Theme } from "./src/shared/theme"

module.exports = {
  pathPrefix: "/minimal-resume-theme",
  siteMetadata: {
    siteUrl: makeSiteUrl(),
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Minimal Resume Theme",
        short_name: "resume",
        start_url: "/",
        background_color: Theme.colors.white,
        theme_color: Theme.colors.main,
        display: "minimal-ui",
        icon: "static/favicon.png",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-zopfli`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-transformer-json",
    `gatsby-plugin-sharp`,
    "gatsby-plugin-remove-trailing-slashes",
    `gatsby-plugin-preload-fonts`,
  ],
}

function makeSiteUrl() {
  if (process.env.NODE_ENV === "production") {
    return "https://dkarski.github.io/"
  } else {
    return "http://localhost:8000"
  }
}
