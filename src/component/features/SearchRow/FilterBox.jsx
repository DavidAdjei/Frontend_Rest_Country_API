// FilterBox.js
import React from 'react';

export const FilterBox = ({ handleFilterChange }) => {
  return (
      <select
      className='filter'
      placeholder='Filter'
      name="Region"
      id="region"
      onChange={handleFilterChange}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
