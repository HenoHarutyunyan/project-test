import React from 'react';
import Kids from '../../Components/Kids/Kids';
import { useState } from 'react';
import { KidsBox } from '../../Utils/Utility';

const KidsPage = () => {
  const [products, setProducts] = useState(KidsBox);
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
    <Kids
      KidsBox={filteredProducts}
      selectedProducts={selectedProducts}
      handleFilter={handleFilter}
      handleClear={handleClear}
    />
  </div>
);
};






export default KidsPage;