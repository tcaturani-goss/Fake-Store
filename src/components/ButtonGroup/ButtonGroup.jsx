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
      <button onClick={() => handleCategoryChange('All')}>All</button>
      <button onClick={() => handleCategoryChange('Jewelry')}>Jewelry</button>
      <button onClick={() => handleCategoryChange("Men's Clothing")}>Men's Clothing</button>
      <button onClick={() => handleCategoryChange("Women's Clothing")}>Women's Clothing</button>
    </div>
  );
};

export default ButtonGroup;