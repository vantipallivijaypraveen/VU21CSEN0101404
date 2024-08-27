import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import { fetchProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import SortOptions from '../components/SortOptions';
import PaginationComponent from '../components/Pagination';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sorting, setSorting] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(filters, sorting, page, 10); // Adjust pageSize as needed
      setProducts(data.products);
      setTotalPages(data.totalPages);
    };

    loadProducts();
  }, [filters, sorting, page]);

  return (
    <Container>
      <Filter filters={filters} setFilters={setFilters} />
      <SortOptions sorting={sorting} setSorting={setSorting} />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <PaginationComponent page={page} totalPages={totalPages} setPage={setPage} />
    </Container>
  );
};

export default AllProductsPage;
