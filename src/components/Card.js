import React from 'react'

const IndexPage = ({ src, title }) => {

  return(
    <>
    <style jsx>{`
      .card{
        position:relative;
        margin-left:6em;
      }
      .card:last-child{
        margin-right:6em;
      }
      .card>img{
        max-height:70vh;
        z-index:8;
        box-shadow:0px 0px 30px 10px black;
        border-radius:1px;
      }
      .card>h2{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:3em;
        text-align:center;
        text-shadow:0px 0px 0.2em black, 0px 0px 0.2em black, 0px 0px 0.2em black;
      }
      `}</style>
    <div className="card"><img alt="" src={src}/><h2>{title}</h2></div>
    </>
)
    }

export default IndexPage
