import React, {useState, useContext} from 'react'
import './CartProductDetails.css'
import Modal from 'react-modal';
import { CartContext } from '../../contexts/CartContext'
import { BsTrash } from "react-icons/bs";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

function CartProductDetails({item}) {

    const [inCart, setInCart] = React.useState(false)

    const [isOpen, setIsOpen] = React.useState(false);

    const {cart, addProduct, removeProduct} = useContext(CartContext);

    React.useEffect(
        ()=> {
          // console.log('product changed')
          // is this product in cart?
          setInCart(cart.find(product => product.id == item.id))
    
        }, [cart]
      )

  return (
    <div>
     <div className='cart-products-main-container'>
        <div className='cart-products-title-container'>
            <p className='item-title'>Item</p>
            <div className='right-title-group'>
            <p className='price-title'>Price</p>
            <p className='quantity-title'>Quantity</p>
            <p className='remove-title'>Remove</p>
            </div>
        </div>
        <div className='cart-products-container'>
        <img src={item?.image} alt="product image" />
        <h1 className='cart-product-title'>{item?.title}</h1>
        <h2 className='cart-product-price'>{item?.price}&#8364;</h2>
        <p className='product-quantity'>1</p>
        <BsTrash className='trash-icon' onClick={()=>removeProduct(item?.id)}/>
        </div>
    </div>
    <div className='checkout-container'>
    <p className='product-total'>Total</p>
    <button className='cart-checkout-btn' onClick={() => setIsOpen(true)}>Checkout</button>
    </div>
    <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Us Modal"
        >
        <form>
          <p>Your Order was Successful!</p>
          <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
          <button className='modal-close-btn'>Return to Main Page</button>
        </form>
        </Modal>
    </div>
  )
}

export default CartProductDetails