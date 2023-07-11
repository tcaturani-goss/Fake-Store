import React, {useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import './ItemDetails.css'
import axios from 'axios'
import { CartContext } from '../../contexts/CartContext'


function ItemDetails() {
// this page shows the details of specific product
  const {productId} = useParams()

//create a variable to add product to cart when button is clicked
const {cart, addProduct} = useContext(CartContext)

// create state to hold data from API
const [product, setProduct] = React.useState('')

//I want to see product details when page loads
// https://fakestoreapi.com/products/1
  React.useEffect(
    () => {
        // make API call to get the data
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(res => {
          console.log(res.data)
          // store data in state
          setProduct(res.data)
        })
        .catch(err => console.log(err))
    }, [] //runs once when the page loads
  )

  return (
    <div className='details-container'>
        <div className='container-info'>
          <img src={product?.image} alt="product image" />
          <h1 className='details-product-title'>{product?.title}</h1>
          <h2 className='details-product-price'>{product?.price}&#8364;</h2>
          <p className='product-description-title'>Description</p>
          <p className='product-description'>{product?.description}</p>
          <Link to='./cart'>My Cart</Link>
          <button className='cart-add-btn' onClick={()=>addProduct(product)}>Add to cart</button>
        </div>
    </div>
  )
}

export default ItemDetails