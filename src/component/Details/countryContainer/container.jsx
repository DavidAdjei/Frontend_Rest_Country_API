import React from 'react';
import { connect } from 'react-redux'; // Import connect
import { Flag } from '../countryFlag/flag';
import  Details   from '../countryDetails/Details';
import { BsArrowLeft } from 'react-icons/bs';
import './container.css';

const Container = ({ onBackClick, selectedCountry, onCountryClick, countries }) => {
  return (
    <div className='container'>
      <div
        className='back_button'
        onClick={onBackClick}>
        <div>
          <p><BsArrowLeft /> Back</p>
        </div>
      </div>
      <div className='details_section'>
        <Flag country={selectedCountry} onBackClick={onBackClick} />
        <Details
          country={selectedCountry}
          onCountryClick={onCountryClick}
          countries={countries}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countries.selectedCountry, 
  };
};

export default connect(mapStateToProps)(Container);
