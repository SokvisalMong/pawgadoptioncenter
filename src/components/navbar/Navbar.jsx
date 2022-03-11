import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'

function Navbar() { 
  return (
    <div className='navbar'>
        <div className='navbar_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='navbar_tabs'>
          <p><a href="/">Home</a></p>
          <p><a href="/veterinary">Veterinary</a></p>
          <p><a href="/adopt">Adopt</a></p>
          <p><a href="/get-involved">Get Involved</a></p>
          <p><a href="/shop">Shop</a></p>
          <p><a href="/donate" class="navbar_donate">Donate</a></p>
        </div>
    </div>
  )
}

export default Navbar