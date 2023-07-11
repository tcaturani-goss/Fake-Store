import React, {useState, useContext} from 'react'
import './Header.css'
import { CartContext } from '../../contexts/CartContext'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'

function Header() {

  const {cart} = useContext(CartContext);
  
  return (
    <div className='header-container'>
        <Link to="/"><p className='store-title'>Fake Store</p></Link>
        <Link to="/cart">
          <div className='cart-logo-container'>
          <AiOutlineShoppingCart className='cart-icon'/>
          <p className='cart-amount-num'>{cart.length}</p>
          </div>
        </Link>
    </div>
  )
}

export default Header