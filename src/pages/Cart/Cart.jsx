import React, {useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'
import ItemCard from '../../components/ItemCard/ItemCard'
import CartProductDetails from '../../components/CartProductDetails/CartProductDetails'
import './cart.css'

function Cart() {
  
  const {cart} = useContext(CartContext)

  return (
    <div className='cart-container'>
        <div className='cart-products'>
           {
           cart.length > 0?
           cart.map(product=><CartProductDetails key={product.id} item={product} />
           )
           :
           <p>No products in cart</p>
           }
        </div>
    </div>
  )
}

export default Cart