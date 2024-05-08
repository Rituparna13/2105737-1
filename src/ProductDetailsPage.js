import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
import ProductDetails from './ProductDetails';

const ProductDetailsPage = () => {
  // Extract productId from the URL params using React Router's useParams hook
  const { productId } = useParams();

  return (
    <div className="product-details-page">
      <h1>Product Details</h1>
      {/* Render the ProductDetails component and pass productId as a prop */}
      <ProductDetails productId={productId} />
    </div>
  );
};

export default ProductDetailsPage;