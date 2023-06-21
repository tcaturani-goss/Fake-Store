import React, { useState } from 'react';
import './ButtonGroup.css';

const ButtonGroup = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div>
      <button onClick={() => handleCategoryChange('all')}>All</button>
      <button onClick={() => handleCategoryChange('jewelery')}>Jewelery</button>
      <button onClick={() => handleCategoryChange('men\'s clothing')}>Men's Clothing</button>
      <button onClick={() => handleCategoryChange('women\'s clothing')}>Women's Clothing</button>
    </div>
  );
};

export default ButtonGroup;