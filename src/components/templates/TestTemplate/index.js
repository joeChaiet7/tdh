import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { 
  Layout,
  BlockRenderer
} from '../../';

/*
export const query = graphql`
  query GetPage {
    allStrapiPage {
      nodes {
        id
        title
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_HERO {
            id
            cta {
              action_type
              action_url
              icon
              icon_position
              id
              text
              theme
              type
            }
            image {
              url
              localFile {
                id
                publicURL
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            type
            title
            text_position
            subtitle
            strapi_component
          }
          ... on STRAPI__COMPONENT_BLOCKS_TABS_SERVICES {
            id
            items {
              title
              theme
              id
              image {
                url
                localFile {
                  id
                  publicURL
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
              cta_text
              cta_destination
              description {
                data {
                  description
                }
              }
              additional_text {
                data {
                  additional_text
                }
              }
            }
            title
            strapi_component
          }
        }
        slug
      }
      
    }
  }
`*/

export default function TestTemplate({ data }) {
  const [pageData, setPageData] = useState();
  const [pageBlocks, setPageBlocks] = useState();

 /* useEffect(() => {
    if(data){
      setPageData(data.allStrapiPage);
      setPageBlocks(data.allStrapiPage.nodes[0].blocks)
    }
  }, [data])

  console.log(pageBlocks && pageBlocks);*/

  return (
    <Layout>
      <div>
        {/*pageBlocks && pageBlocks.map((block, i) => (
          <BlockRenderer key={`${block.id}-${i}`} block={block} />
        ))*/}
      </div>
    </Layout>
  )
}
