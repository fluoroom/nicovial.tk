import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from "gatsby"
import Card from '../components/Card'
import Gallery from '../components/Gallery'
import shuffle from 'lodash/shuffle'

const IndexPage = ({data}) => {

  return(
  <Layout>
    <SEO />
    <Gallery>
      {
      data.allContentfulAlbum.nodes.map((album) => {
        return (
        <Card src={album.cover.file.url} title={album.title} link={'/album/'+album.contentful_id} />
        )
        })}
    </Gallery>
  </Layout>
)
    }

export default IndexPage

export const query = graphql`
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
`