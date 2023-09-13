import React from 'react';
import './details.css';
import {Border} from './Borders'
export const Details = ({country, countries, onCountryClick}) => !country ? null :
   (
    <div className='details__right-div' key={country.numericCode}>
      <h1>{country.name}</h1>
      <div className='country__info'>
        <div>
          <p><span className='countrySpecs'>Native Name: </span>{country.nativeName}</p>
          <p><span className='countrySpecs'>Population: </span>{country.population}</p>
          <p><span className='countrySpecs'>Region: </span>{country.region}</p>
          <p><span className='countrySpecs'>Sub Region: </span>{country.subregion}</p>
          <p><span className='countrySpecs'>Capital: </span>{country.capital}</p>
        </div>
        <div>
          <p><span className='countrySpecs'>Top Level Domain: </span>{country.topLevelDomain}</p>
          <p><span className='countrySpecs'>Currencies: </span>{country.currencies[0].name}</p>
          <p style={{display: 'flex', flexDirection: 'row', gap: '.4rem'}}>
            <span  className='countrySpecs'>Languages: </span>
            {country.languages.map(language => (
              <span>{ language.name } </span>
            ))}
          </p>
        </div>  
      </div>   
          <Border
            country={country}
            countries={countries}
            onCountryClick={onCountryClick}
          />  
    </div>
  );