import React, { useEffect, useState } from 'react';
import './ButtonGroup.css';
import axios from 'axios';

const ButtonGroup = ({ setProducts }) => {
  const [categories, setCategorories] = useState([]);

  const handleCategoryChange = (category) => {
    console.log(category)
    // Call API to get data for this category
    fetchData(category)
    // setSelectedCategory(category);
    // onCategoryChange(category);
  };

  const getAllProducts = () => {
    // Call API to get all products
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      console.log(res.data);
      setProducts(res.data);
    })
    .catch(err => console.log(err));
  }

  const fetchData = async (category) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

//  Need to get the categories from the API when the page loads
  useEffect(
    () => {
        // make API call to get the categories
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res => {
            // console.log(res.data)
            // save this data to state
        setCategorories(res.data)
        })
        .catch(err => console.log(err))
    }, []
 )
  return (
    <div>
      {/* <button onClick={() => handleCategoryChange('all')}>All</button>
      <button onClick={() => handleCategoryChange('electronics')}>Electronics</button>
      <button onClick={() => handleCategoryChange('men\'s clothing')}>Men's Clothing</button>
      <button onClick={() => handleCategoryChange('jewelery')}>Jewelery</button>
      <button onClick={() => handleCategoryChange('women\'s clothing')}>Women's Clothing</button> */}
      
      <div className='category-btns-container'>
      <p onClick={getAllProducts}>All</p>
      {
        categories.map(item => <p key={item} onClick={() => handleCategoryChange(item)}>{item}</p>)
      }
      </div>
    </div>
  );
};

export default ButtonGroup;