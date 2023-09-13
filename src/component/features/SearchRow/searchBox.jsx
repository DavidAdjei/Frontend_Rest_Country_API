import React from 'react'

export const SearchBox = ({handleChange}) => {

    return (
        <input
            icon="search"
            className='search'
            type="search"
            placeholder=' Search a country'
            onChange={handleChange}
        />
    )
  
}

