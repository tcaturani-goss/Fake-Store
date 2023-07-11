import React, {useContext} from 'react'
import './ItemCard.css'
import { CartContext } from '../../contexts/CartContext'
import { AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { Link } from 'react-router-dom'

function ItemCard({item}) {
  
//create variable to control heart icons
  // const inCart = false;
  // change to state

  const [inCart, setInCart] = React.useState(false)

  const {cart, addProduct, removeProduct} = useContext(CartContext)
 
  // need to check if this product is in the cart
  // anytime the cart changes
  React.useEffect(
    ()=> {
      // console.log('product changed')
      // is this product in cart?
      setInCart(cart.find(product => product.id == item.id))

    }, [cart]
  )


  return (
    <div>
        <div className='item-card'>
          {
            inCart?
            <AiFillHeart className='heart-icon' onClick={()=>removeProduct(item?.id)}/>
            :
            <AiOutlineHeart className='heart-icon' onClick={() => addProduct(item)}/>
          }
          <a href={`/details/${item?.id}`}><img src={item?.image} alt="item image" /></a>
          <h1>{item.title}</h1>
          <p className='item-category'>{item.category}</p>
          <h2>{item.price}&#8364;</h2>
        </div>
    </div>
  )
}

export default ItemCard