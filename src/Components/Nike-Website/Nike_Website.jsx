import React from 'react'
import './Nike_Website.css' 
import Logo_Image from '../image/Nike-logo.png'

function Nike_Website() {
  return (
    <div>
      <header>
        <div className='logo'>
        <img src={Logo_Image} alt="logo-img" />
        </div>
        <nav className='nav_bar'>
         <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
        </nav>
        <div className='btn'>
         <a href="#">Login</a>
        </div>
      </header>
    </div>
  )
}

export default Nike_Website
