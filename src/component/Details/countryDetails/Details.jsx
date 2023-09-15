import React from 'react';
import './details.css';
import { connect } from 'react-redux';
import { Border } from './Borders';

const Details = ({ selectedCountry, countries, onCountryClick}) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = selectedCountry;

  return (
    <div className='details__right-div' key={selectedCountry.numericCode}>
      <h1>{name}</h1>
      <div className='country__info'>
        <div>
          <p><span className='countrySpecs'>Native Name: </span>{nativeName}</p>
          <p><span className='countrySpecs'>Population: </span>{population}</p>
          <p><span className='countrySpecs'>Region: </span>{region}</p>
          <p><span className='countrySpecs'>Sub Region: </span>{subregion}</p>
          <p><span className='countrySpecs'>Capital: </span>{capital}</p>
        </div>
        <div>
          <p><span className='countrySpecs'>Top Level Domain: </span>{topLevelDomain}</p>
          <p><span className='countrySpecs'>Currencies: </span>{currencies[0].name}</p>
          <p style={{ display: 'flex', flexDirection: 'row', gap: '.4rem' }}>
            <span className='countrySpecs'>Languages: </span>
            {languages.map(language => (
              <span>{language.name} </span>
            ))}
          </p>
        </div>
      </div>
      <Border
        countries={countries}
        country={selectedCountry}
        onCountryClick={onCountryClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCountry: state.countries.selectedCountry,
});

export default connect(mapStateToProps)(Details); 
