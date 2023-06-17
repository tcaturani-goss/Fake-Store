import React from 'react'
import './ItemCard.css'

function ItemCard({item}) {


  return (
    <div className='item-card'>
        <img src={item?.image} alt="item image" />
        <h1>{item.title}</h1>
        <p className='item-category'>{item.category}</p>
        <h2>{item.price}&#8364;</h2>
    </div>
  )
}

export default ItemCard