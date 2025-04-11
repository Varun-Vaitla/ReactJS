import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <marquee >🔥 Big Sale! Flat 50% OFF on Puma Products. Shop Now! 🛍️</marquee>
        <img src="\public\home.jpg" alt="" height="400px" width="100%" />
        <div id="main">
        <img src="\public\sale.png" alt="" height="300px" width="50%" />
        <img src="\public\image2.jpg" alt="" height="300px" width="50%" />
        </div>
        
        
    </div>
  )
}

export default Home