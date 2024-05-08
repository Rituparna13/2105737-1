import React from 'react';
import ProductList from './ProductList';

const AllProductsPage = () => {
  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      {/* Implement filtering and sorting options here */}
      <ProductList />
    </div>
  );
};

export default AllProductsPage;