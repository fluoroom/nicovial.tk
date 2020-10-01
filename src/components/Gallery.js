import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticQuery, graphql } from "gatsby"
import Card from '../components/Card'

const IndexPage = () => {

  return(
  <Layout>
    <style jsx>{`
      #gallerycontainerouter{
        height:100vh;
        width:100vw;
        overflow:hidden;
        position:relative;
      }
      #gallerycontainer{
        transform:rotate(270deg) translateY(-100%);
        transform-origin:top right;
        scrollbar-width:none;
        overflow-x:auto;
        height:100vw;
      }
      ::-webkit-scrollbar {
        display: none;
    }
      #gallery{
        display:flex;
        align-items:center;
        flex-direction:row;
        justify-content:flex-start;
        transform:rotate(90deg) translateX(100%);
        transform-origin:top right;
        height:100vh;
      }
      #gallery:after{
        content:' ‎';
      }
    `}
    </style>
    <SEO title='Home' />
    <div id="gallerycontainerouter">
    <div id="gallerycontainer">
    <div id="gallery">
      <StaticQuery
        query={graphql`
        query ALbums {
          allStrapiAlbum {
            nodes {
              Cover {
                publicURL
              }
              Title
            }
          }
        }
      `} 
      render={data=>
      data.allStrapiAlbum.nodes.map(album => {
        return(
        <Card src={album.Cover.publicURL} title={album.Title}/>
        )
      })
      } />
    </div></div></div>
  </Layout>
)
    }

export default IndexPage
