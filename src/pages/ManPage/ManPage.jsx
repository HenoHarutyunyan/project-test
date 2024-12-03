import React, { useState } from 'react';
import Man from '../../Components/Man/Man';
import { ManBox } from '../../Utils/Utility';

const ManPage = () => {
  const [products, setProducts] = useState(ManBox);
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
      <Man
        ManBox={filteredProducts}
        selectedProducts={selectedProducts}
        handleFilter={handleFilter}
        handleClear={handleClear}
      />
    </div>
  );
};

export default ManPage;
