// SearchRow.js
import React from 'react';
import { SearchBox } from './searchBox';
import { FilterBox } from './FilterBox';
import './search.css';

export const SearchRow = (props) => {
  return (
    <div className='searchRow'>
      <SearchBox handleChange={props.handleSearchChange} />
      <FilterBox handleFilterChange={props.handleFilterChange} /> 
    </div>
  );
};
