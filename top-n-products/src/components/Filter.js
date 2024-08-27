import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

const Filter = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select name="category" value={filters.category || ''} onChange={handleFilterChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
          {/* Add more categories as needed */}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Company</InputLabel>
        <Select name="company" value={filters.company || ''} onChange={handleFilterChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="company1">Company 1</MenuItem>
          <MenuItem value="company2">Company 2</MenuItem>
          {/* Add more companies as needed */}
        </Select>
      </FormControl>

      <TextField
        label="Min Rating"
        type="number"
        name="minRating"
        value={filters.minRating || ''}
        onChange={handleFilterChange}
      />

      <TextField
        label="Max Price"
        type="number"
        name="maxPrice"
        value={filters.maxPrice || ''}
        onChange={handleFilterChange}
      />

      <FormControl>
        <InputLabel>Availability</InputLabel>
        <Select name="availability" value={filters.availability || ''} onChange={handleFilterChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="true">In Stock</MenuItem>
          <MenuItem value="false">Out of Stock</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
