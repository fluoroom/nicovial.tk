import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticQuery, graphql } from "gatsby"
import Card from '../components/Card'
import Gallery from '../components/Gallery'

const IndexPage = () => {
  return(
  <Layout>
    <SEO />
    <Gallery>
      <StaticQuery
        query={graphql`
        query Albums {
          allContentfulAlbum {
            nodes {
              cover {
                file {
                  url
                }
              }
              title
              contentful_id
            }
          }
        }
      `} 
      render={data=>
      data.allContentfulAlbum.nodes.map((album, index) => {
        return (
        <Card src={album.cover.file.url} title={album.title} link={'/album/'+(index+1)} />
        )
        })
      } />
    </Gallery>
  </Layout>
)
    }

export default IndexPage
