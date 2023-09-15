import React from 'react';
import { useTheme } from '../../themes/theme';

export const SearchBox = ({handleChange}) => {
    const [theme, setTheme, getTheme] = useTheme();
    const contextTheme = getTheme();
    return (
        <input
            style={{
                background: contextTheme.elements,
                color: contextTheme.text
            }}
            icon="search"
            className='search'
            type="search"
            placeholder=' Search a country'
            onChange={handleChange}
        />
    )
  
}

