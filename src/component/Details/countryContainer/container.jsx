import React from 'react';
import { Flag } from '../countryFlag/flag';
import { Details } from '../countryDetails/Details';
import { BsArrowLeft } from 'react-icons/bs';
import './container.css';

import data from '../../../data.json';

export const Container = ({ onBackClick, selectedCountry, onCountryClick }) => {

  return (
    <div className='container'>
      <div
        className='back_button'
        onClick={onBackClick}>
        <div >
          <p><BsArrowLeft/> Back</p>
        </div>
      </div>
      <div className='details_section'>
        <Flag country={selectedCountry} onBackClick={onBackClick} />
        <Details
          country={selectedCountry}
          countries={data} // Use data directly since there's no state
          onCountryClick={onCountryClick}
        />
      </div>
    </div>
  );
};


