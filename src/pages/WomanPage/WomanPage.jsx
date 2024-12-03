import React from 'react';
import Woman from '../../Components/Woman/Woman';
import { WomanBox } from '../../Utils/Utility';
import { useState } from 'react';

const WomanPage = () => {
  const [products, setProducts] = useState(WomanBox);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleFilter = (title) => {
  setSelectedProducts((prev) => {
    if (prev.includes(title)) {
      return prev.filter((item) => item !== title);
    } else {
      return [...prev, title];  
    }
  });
};
const handleClear = () => {
  setSelectedProducts([]);
};
const filteredProducts = selectedProducts.length > 0
  ? products.filter((item) => selectedProducts.includes(item.title))
  : products;
return (
  <div>
    <Woman
      WomanBox={filteredProducts}
      selectedProducts={selectedProducts}
      handleFilter={handleFilter}
      handleClear={handleClear}
    />
  </div>
);
};

export default WomanPage;