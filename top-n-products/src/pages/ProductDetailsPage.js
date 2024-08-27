import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { fetchProductById } from '../api/products';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };

    loadProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="h6">{product.company}</Typography>
      <Typography>Category: {product.category}</Typography>
      <Typography>Price: ${product.price}</Typography>
      <Typography>Rating: {product.rating}</Typography>
      <Typography>Discount: {product.discount}%</Typography>
      <Typography>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
    </Container>
  );
};

export default ProductDetailsPage;
