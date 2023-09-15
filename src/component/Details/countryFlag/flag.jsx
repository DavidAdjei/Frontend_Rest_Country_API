import React from 'react';
import './flag.css';
import { connect } from 'react-redux';

const Flag = ({ selectedCountry }) => {
  return (
    <div className='details__left-div'>
      <img
        src={selectedCountry.flags && selectedCountry.flags.png}
        alt={`${selectedCountry.name} Flag`}
        className='image'
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCountry: state.countries.selectedCountry, 
});

export default connect(mapStateToProps)(Flag);
