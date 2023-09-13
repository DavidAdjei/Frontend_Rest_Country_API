import React from 'react';
import './flag.css'

export const Flag = ({ country }) => {
  return (
    <div className='details__left-div'>
      <img
        src={country.flags && country.flags.png}
        alt={`${country.name} Flag`}
        className='image'
      />
    </div>
  );
};
