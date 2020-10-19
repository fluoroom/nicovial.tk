import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from "gatsby"
import Card from '../components/Card'
import Gallery from '../components/Gallery'

const IndexPage = ({data}) => {
  /*function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
} 
  shuffleArray(data.allContentfulAlbum.nodes);*/
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