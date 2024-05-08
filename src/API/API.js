import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await api.get(/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice});
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductDetails = async (productId) => {
  try {
    const response = await api.get(/products/${productId});
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};
