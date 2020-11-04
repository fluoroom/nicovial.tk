import React from 'react'
import Header from './header'
import Footer from './footer'
import './layout.css'
import BgImg from '../images/grain.jpg'

const Layout = ({ children }) => {

  return (
    <><div id="bgwrap"></div>
    <style jsx>{`
      #bgwrap{
        background-image:url(${BgImg});
        background-size:cover;
        height:100vh;
        width:100vw;
        z-index:-10;
        position:fixed;
      }
    `}</style>
      <Header/>
      <main>
      {children}
      </main>
      <Footer/>
    </>
  )
}
export default Layout
