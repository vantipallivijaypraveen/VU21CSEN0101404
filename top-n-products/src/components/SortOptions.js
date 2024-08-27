import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortOptions = ({ sorting, setSorting }) => {
  const handleSortChange = (e) => {
    setSorting({
      ...sorting,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormControl style={{ marginBottom: '20px' }}>
      <InputLabel>Sort By</InputLabel>
      <Select name="sortBy" value={sorting.sortBy || ''} onChange={handleSortChange}>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="discount">Discount</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortOptions;
