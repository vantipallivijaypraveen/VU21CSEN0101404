import axios from 'axios';

const API_BASE_URL = 'https://your-backend-api-url.com'; // Replace with your backend API URL

export const fetchProducts = async (filters, sorting, page, pageSize) => {
  const response = await axios.get(`${API_BASE_URL}/products`, {
    params: { ...filters, ...sorting, page, pageSize },
  });
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};


