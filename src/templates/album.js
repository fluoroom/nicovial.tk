import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/Card'

const AlbumPage = ({ pageContext }) => {
  var title0;
  var title1;
  var title= pageContext.data.title.split('(');
  title0= title[0];
  if(title[1]){
  title1= '('+title[1];}

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
        padding-left:35vw;
      }
      #gallery:after{
        content:' ‎';
      }
      #galleryTitle{
        position: absolute;
        text-align: center;
        top: 0;
        left: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        width: 35vw;
        justify-content: center;
        margin-left: 2em;
    }
    #galleryTitle>h2{
      font-size:4.5em;
      text-align:center;
      vertical-align:middle;
      text-shadow:0px 0px 0.2em black, 0px 0px 0.2em black, 0px 0px 0.2em black;
    }
    .small{
      font-size:0.6em;
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
      padding-left:65vw;
    }
    #gallery:after{
      content:' ‎';
    }
    #galleryTitle{
      position: absolute;
      text-align: center;
      top: 0;
      left: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      width: 65vw;
      justify-content: center;
      margin-left: 1.5em;
  }
  #galleryTitle>h2{
    font-size:4.5em;
    text-align:center;
    vertical-align:middle;
    text-shadow:0px 0px 0.2em black, 0px 0px 0.2em black, 0px 0px 0.2em black;
  }
  .small{
    font-size:0.6em;
  }
  }
    `}
    </style>
    <SEO title={pageContext.data.title} />
    <div id="galleryTitle"><h2>{title0}<br/><span className="small">{title1}</span></h2></div>
    <div id="gallerycontainerouter">
    <div id="gallerycontainer">
    <div id="gallery">
    
      {pageContext.data.photos.map(photo => {
        return(
        <Card src={photo.file.url} />
        )
      })}
    </div></div></div>
  </Layout>
)
}
export default AlbumPage