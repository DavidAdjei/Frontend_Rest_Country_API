// CardContainer.js
import { connect } from 'react-redux';
import Card from './card';
import {
  setSearchField,
  setSelectedRegion,
  setSelectedCountry,
  toggleTheme,
} from './actions';

const filteredCountriesSelector = (state) => {
  const { countries, searchField, selectedRegion } = state;

  return countries.filter((country) => {
    const nameMatch = country.name.toLowerCase().includes(searchField.toLowerCase());
    const regionMatch = selectedRegion === '' || country.region === selectedRegion;

    return nameMatch && regionMatch;
  });
};

const mapStateToProps = (state) => ({
  countries: filteredCountriesSelector(state),
  selectedCountry: state.selectedCountry,
});

const mapDispatchToProps = {
  handleSearchChange: setSearchField,
  handleFilterChange: setSelectedRegion,
  onCountryClick: setSelectedCountry,
  toggleTheme: toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
