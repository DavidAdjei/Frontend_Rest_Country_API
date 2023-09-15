// FilterBox.js
import React from 'react';
import { useTheme } from '../../themes/theme';

export const FilterBox = ({ handleFilterChange }) => {
  const [theme, setTheme, getTheme] = useTheme();
  const contextTheme = getTheme();
  return (
    <select
      style={{
        background: contextTheme.elements,
        color: contextTheme.text
      }}
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
