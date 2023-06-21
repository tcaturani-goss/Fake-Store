import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ItemCard from '../../components/ItemCard/ItemCard'
import ButtonGroup from './../../components/ButtonGroup/ButtonGroup';

function Homepage() {
  const [items, setItems] = useState([]);

  const fetchData = async (category) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      console.log(category)
      setItems(response.data);
    } catch (error) {
      console.log(error);
      setItems([]);
    }
  };

  const handleCategoryChange = (category) => {
    fetchData(category);
  };
 
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
      <ButtonGroup onCategoryChange={handleCategoryChange} />
      <div className="items-container">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;