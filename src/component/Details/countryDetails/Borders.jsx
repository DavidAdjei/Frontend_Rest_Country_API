import React from 'react';
import './details.css';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
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
  const country = countries.find((country) => country.alpha2Code === alpha2code);
  if (country) {
    return country;
  }
};

const hasBorders = (country) => {
  return country && country.borders && country.borders.length > 0;
};

export const Border = ({ country, countries}) => {
  const navigate = useNavigate();
   let { state } = useLocation();
  const { alpha2Code } = useParams();

  const handleCountryClick = (selectedAlpha2Code) => {
    const selectedCountry = findCountryByAlpha2Code(selectedAlpha2Code, countries);
    setSelectedCountry(selectedCountry);
    navigate(`/:${selectedAlpha2Code}`, { replace: true }, { state: selectedCountry });
  };

  if (!country || !hasBorders(country)) {
    return null;
  }

  return (
    <div>
      <p className="borderNations">
        <span className="countrySpecs">Border Nations: </span>
        <span className="country__borders">
          {country.borders.map((border) => (
            <p
              className='borderButton'
              key={border}
              onClick={() => handleCountryClick(border)}>
              {getCountryName(border, countries)}
            </p>
          ))}
        </span>
      </p>
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
