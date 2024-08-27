import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => (
  <Card>
    <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
    <CardContent>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="body2">{product.company}</Typography>
      <Typography variant="body2">Category: {product.category}</Typography>
      <Typography variant="body2">Price: ${product.price}</Typography>
      <Typography variant="body2">Rating: {product.rating}</Typography>
      <Typography variant="body2">Discount: {product.discount}%</Typography>
      <Typography variant="body2">Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
    </CardContent>
  </Card>
);

export default ProductCard;
