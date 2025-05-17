import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>this is Navbar</h1>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>

      </div>
  )
}

export default Navbar