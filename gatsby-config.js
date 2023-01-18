
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/*const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "page",
      queryParams: {
        publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? "preview" : "live",
        populate: "deep,8"
      },
    },
  ],
  singleTypes: [],
  queryLimit: 1000
};*/

const siteUrl = process.env.URL || `https://teladochealth.com`

module.exports = {
  siteMetadata: {
    title: `Teladoc Health`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Joe Chaiet`,
    siteUrl: `https://teladochealth.com`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha512',
        crossorigin: true
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap",
        excludes: [
          `/[...keyword]`, 
          `/[...keyword]/**`, 
          `/using-dsg`, 
          `/dev-404-page/`, 
          `/404/`, 
          `/404.html`, 
          `/using-ssr/`, 
          `/using-typescript/`
        ],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages
          .filter(page => !page.path.includes("keyword"))
          .map(page => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: siteUrl + path,
            lastmod: modifiedGmt,
          }
        },
      }
    },
    /*{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./src/assets/img`,
      },
      __key: "images",
    },
   {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig
    }*/
  ],
}
