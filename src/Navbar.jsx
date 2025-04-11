import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav id='navbar'>
            <img src="\public\puma2.jpg" alt="" height="80px" width="180px" />
            <ul id='navUL'>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/login" className='link'>Login</Link></li>
                <li><Link to="/signup" className='link'>Signup</Link></li>
                <li><Link to="/product" className='link'>Product</Link></li>
                <li><Link to="/cart" className='link'>Cart</Link></li>
            </ul>

        </nav>
    </div>
  )
}

export default Navbar


