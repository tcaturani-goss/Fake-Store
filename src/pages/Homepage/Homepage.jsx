import React, { useEffect, useState } from 'react';
import './Homepage.css';
import axios from 'axios';
import ItemCard from '../../components/ItemCard/ItemCard';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('homepage loaded');
    // Call API to get the products
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
        {/* setItems  */}
      <ButtonGroup setProducts={setProducts} />
      <div className="items-container">
        {products.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;