import React, { useLayoutEffect, useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from "gatsby"
import Card from '../components/Card'
import Gallery from '../components/Gallery'

function linkify(string){
  return string.toLowerCase().replace(/["'()]/g,"").replace(/\s/g, '-');
}
function shuffleArray(array) {
  let tempArray = array;
  for (let i = tempArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }
  return tempArray;
}
const IndexPage = ({data}) => {
  const [shuffled,setShuffled] = useState([]);
  useLayoutEffect(() => {
    setShuffled(shuffleArray(data.allContentfulAlbum.nodes));
  }, [data.allContentfulAlbum.nodes])
  return(
  <Layout>
    <SEO />
    <Gallery>
      {
      shuffled.map((album, index) => {
        return (
        <Card src={album.cover.file.url} title={album.title} link={'/album/'+linkify(album.title)} />
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
        file{
          url
        }
      }
      title
    }
  }
}
`