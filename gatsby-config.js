const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: 'Nico Vial - Portfolio',
    description: 'My photography portfolio',
    author: '@gatsbyjs'
  },
  plugins: [
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
        },
      },
    },
    'gatsby-plugin-react-helmet',
     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kkqbqm4hi2mi`,
        accessToken: `9TeIhvGmpq_sCPoYBtHFQIBxKVL9RlpmosUGx1uGvfQ`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nico Vial | Portfolio`,
        short_name: `Nico Vial`,
        lang:`en`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        icon: `src/images/icon.png`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
