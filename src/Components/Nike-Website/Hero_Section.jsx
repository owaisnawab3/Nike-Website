import React from 'react'
import './Nike_Website.css'
import Nike_Shoes from '../image/Nike_Shoes.png'
import Flipkart_icon from '../Shopping-icons/flipkart-icon.png'
import Amazon_icon from '../Shopping-icons/Amazon.png'


function Hero_Section() {
  return (
    <div>
      <div className='container'>
      <div className='right-section'>
       <h1>Your Feet Deserve The Best</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam optio quis atque ipsa sit itaque, esse aliquam? Molestiae laboriosam </p>
       <div className='button'>
        <a href="">Shop Now</a>
        <a href="" className='category'>Category</a>
       </div>
       <p>Also Available On</p>
       <div className='shopping-icons'>
        <img className='flipkart' src={Flipkart_icon} alt="flipkart-img" />
        <img className='amazon' src={Amazon_icon} alt="flipkart-img" />
       </div>
      </div>
      <div className='left-section'>
       <div className='nike_image'>
       <img src={Nike_Shoes} alt="" />
       </div>
      </div>
      </div>
    </div>
  )
}

export default Hero_Section
