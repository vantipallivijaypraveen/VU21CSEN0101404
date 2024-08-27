import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationComponent = ({ page, totalPages, setPage }) => {
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return <Pagination count={totalPages} page={page} onChange={handlePageChange} />;
};

export default PaginationComponent;
