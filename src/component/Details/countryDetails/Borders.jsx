import React, { useState } from 'react';
import './details.css';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const getCountryName = (alpha3code, countries) => {
  const country = countries.find((countryWanted) => countryWanted.alpha3Code === alpha3code);

  if (!country) {
    return alpha3code;
  }

  if (country.name && country.name.length > 12) {
    return alpha3code;
  } else {
    return country.name;
  }
};

const findCountryByAlpha2Code = (alpha2code, countries) => {
    for(var i=0; i<countries.length; i++){
        if(countries[i].alpha2Code === alpha2code){
            return countries[i];
        }
    };
};



const hasBorders = (country) => {
  return country && country.borders && country.borders.length > 0;
};

export const Border = ({ country, countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();
  const { alpha2Code } = useParams();
  const location = useLocation();

  const handleCountryClick = (selectedAlpha2Code) => {
  console.log("Selected Alpha2Code:", selectedAlpha2Code);

  const selectedCountry = findCountryByAlpha2Code(selectedAlpha2Code, countries);
  
  console.log("Selected Country:", selectedCountry);

  if (selectedCountry) {
    setSelectedCountry(selectedCountry);
    navigate(`/:${selectedAlpha2Code}`);
  }
};

  if (!country || !hasBorders(country)) {
    return null;
  }

  return (
    <div>
      <p className="borderNations">
        <span className="countrySpecs">Border Nations: </span>
        <div className="country__borders">
          {country.borders.map((border) => (
            <p className='borderButton'
              key={border}
              onClick={() => handleCountryClick({ alpha2Code: border })}>
              {getCountryName(border, countries)}
            </p>
          ))}
        </div>
      </p>
    </div>
  );
};
