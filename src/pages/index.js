import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticQuery, graphql } from "gatsby"
import Card from '../components/Card'

const IndexPage = () => {
  return(
  <Layout>
    <style jsx>{`
    @media(min-width:901px){
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
    }
      @media(max-width:900px){
        #gallerycontainerouter{
          height:100vh;
          width:100vw;
          overflow:hidden;
          position:relative;
        }
        #gallerycontainer{
          scrollbar-width:none;
          overflow-x:auto;
        }
        ::-webkit-scrollbar {
          display: none;
      }
        #gallery{
          display:flex;
          align-items:center;
          flex-direction:row;
          justify-content:flex-start;
          height:100vh;
        }
        #gallery:after{
          content:' ‎';
        }
      }
    `}
    </style>
    <SEO />
    <div id="gallerycontainerouter">
    <div id="gallerycontainer">
    <div id="gallery">
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
    </div></div></div>
  </Layout>
)
    }

export default IndexPage
