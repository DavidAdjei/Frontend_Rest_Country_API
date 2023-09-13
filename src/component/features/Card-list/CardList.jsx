import React from 'react';
import styles from './cardList.module.css';

export const CardList = ({country, onCountryClick}) => {
  return (
    <div
      className={styles.cardList}
      key={country.numericCode}
      onClick={() => onCountryClick(country)}>
      <div className={styles.images}>
        <img src={country.flags.png} alt="Flag" className={styles.flags} />
      </div>
      <div className={styles.countryDetails}>
        <h4 className={styles.countryName}>{country.name}</h4>
        <p> <span className={styles.countrySpecs}>Population:</span>  {country.population}</p>
        <p> <span className={styles.countrySpecs}>Region:</span>  {country.region}</p>
        <p> <span className={styles.countrySpecs}>Capital:</span>  {country.capital}</p>
      </div>
    </div>
  );
};
