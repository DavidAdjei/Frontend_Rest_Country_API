import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../themes/theme';
import { store } from '../../reducer/store';
import { setCountries, setSearchField, setSelectedRegion, setSelectedCountry, toggleTheme } from '../../reducer/countriesReducer';
import { NavBar } from './../features/navBar/navBar';
import { Card } from './../features/Card/card';
import  Container  from '../Details/countryContainer/container';
import './App.css'
const data = require('../../data.json');

const App = ({
  countries,
  searchField,
  selectedRegion,
  selectedCountry,
  setCountries,
  setSearchField,
  setSelectedRegion,
  setSelectedCountry,
}) => {
  const navigate = useNavigate();
  const [theme, setTheme, getTheme] = useTheme();
  const contextTheme = getTheme();

  useEffect(() => {
    setCountries(data);
  }, [setCountries]);

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
    setSearchField('');
    setSelectedRegion('');
    navigate('/');
  };

  const toggleTheme = () => {
    setTheme(theme => theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    navigate(`/:${country.alpha3Code}`);
  };

  const filteredCountries = countries.filter((country) => {
    const nameMatch = country.name.toLowerCase().includes(searchField.toLowerCase());
    const regionMatch = selectedRegion === '' || country.region === selectedRegion;
    return nameMatch && regionMatch;
  });

  return (
    <Provider store={store}>
      <section
        style={{
          background: contextTheme.background,
          color: contextTheme.text,
        }}
      >
        <NavBar toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <Card
                countries={filteredCountries}
                handleSearchChange={handleSearchChange}
                handleFilterChange={handleFilterChange}
                onCountryClick={handleCountryClick}
                selectedCountry={selectedCountry}
              />
            }
          />
          <Route
            path="/:countryCode"
            element={
              <Container
                selectedCountry={selectedCountry}
                onBackClick={handleBackClick}
                onCountryClick={handleCountryClick}
                countries={countries}
              />
            }
          />
        </Routes>
      </section>
    </Provider>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries.countries,
  searchField: state.countries.searchField,
  selectedRegion: state.countries.selectedRegion,
  selectedCountry: state.countries.selectedCountry,
});

const mapDispatchToProps = {
  setCountries,
  setSearchField,
  setSelectedRegion,
  setSelectedCountry,
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
