import React from 'react'
import './Header.css'
import shoppingcartLogo from './shopping-cart-img.png'

function Header() {
  return (
    <div className='header-container'>
        <p className='store-title'>Fake Store</p>
        <img src={shoppingcartLogo} alt="image of shopping cart with one item in it" />
    </div>
  )
}

export default Header