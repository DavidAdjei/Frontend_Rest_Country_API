import React from 'react';
import './details.css';
import { connect } from 'react-redux';
import { setSelectedCountry } from '../../../reducer/countriesReducer';

const getCountryName = (alpha3code, countries) => {
  if (!Array.isArray(countries)) {
    return alpha3code; 
  }
  const country = countries.find((countryWanted) => countryWanted.alpha3Code === alpha3code);
  if (!country) {
    return alpha3code;
  } else if (country.name && country.name.length > 12) {
    return alpha3code;
  } else {
    return country.name;
  }
};

const findCountryByAlpha2Code = (alpha2code, countries) => {
  const country = countries.find((country) => country.alpha3Code === alpha2code);
  if (country) {
    return country;
  }
};

const hasBorders = (country) => {
  return country && country.borders && country.borders.length > 0;
};

export const Border = ({ country, countries, onCountryClick}) => {
  if (!country || !hasBorders(country)) {
    return null;
  }

  return (
    <div>
      <div className="borderNations">
        <span className="countrySpecs">Border Nations: </span>
        <span className="country__borders">
          {country.borders.map((border) => (
            <p
              className='borderButton'
              key={border}
              onClick={() => onCountryClick(findCountryByAlpha2Code(border, countries))}>
              {getCountryName(border, countries)}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries.countries,
  selectedCountry: state.countries.selectedCountry,
});

const mapDispatchToProps = {
  setSelectedCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Border);
