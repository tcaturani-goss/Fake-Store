import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ItemCard from '../../components/ItemCard/ItemCard'
import ButtonGroup from './../../components/ButtonGroup/ButtonGroup';

function Homepage() {
    //create state for items 
    const[items, setItems] = useState([])

    //functionality for handling catergory changes

    //https://fakestoreapi.com/products
    //show all the items when the page loads

    const fetchData = async (category) => {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelry')
        const items = await response.json();
        return items;
    }

    const handleCategoryChange = async  (category) => {
        const apiData = await fetchData(category);
        setItems(apiData);
    }

    useEffect(
        ()=>{
            console.log('homepage loaded')
            //call api to get the item data
            axios.get('https://fakestoreapi.com/products')
            .then(res =>{
                console.log(res.data)
                //store it in state
                setItems(res.data)
            })
            .catch(err => console.log(err))

        }, [] //means it runs only once when the page loads
    )

  return (
    <div>
        {/* <nav>
            <a href="#">All</a>
            <a href="#">Electronics</a>
            <a href="#">Men's Clothing</a>
            <a href="#">Jewelery</a>
            <a href="#">Women's Clothing</a>
        </nav> */}
        <ButtonGroup onCategoryChange={handleCategoryChange}/>
        <div className='items-container'>
            {
                items.map(item=><ItemCard 
                    key={item.id} item={item}/>)
            }
        </div>
    </div>
  )
}

export default Homepage