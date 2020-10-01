import { Link } from 'gatsby'
import React from 'react'
import FbImg from '../images/fb.png'
import InstaImg from '../images/insta.png'
import BehImg from '../images/beh.png'

const Header = () => {
  return (
    <header>
      <h1><Link to='/'>Nico Vial</Link></h1>
      <nav>
        <ul>
          <li><a href="https://www.instagram.com/rytratt/" rel='noreferrer' target="_blank"><img src={InstaImg} alt="" /></a></li>
          <li><a href="https://www.facebook.com/rytratt" rel='noreferrer' target="_blank"><img src={FbImg} alt="" /></a></li>
          <li><a href="https://www.behance.net/nicovial" rel='noreferrer' target="_blank"><img src={BehImg} alt="" /></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
