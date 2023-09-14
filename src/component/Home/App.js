import React, { useState, useEffect } from 'react';
import { NavBar } from './../features/navBar/navBar';
import { Card } from './../features/Card/card';
import { Routes, Route } from 'react-router-dom'
import { Container } from '../Details/countryContainer/container';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../themes/theme';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import './App.css'

const data = require('../../data.json');

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();
    // eslint-disable-next-line
  const [theme, setTheme, getTheme] = useTheme();
  const contextTheme = getTheme();


  useEffect(() => {
    setCountries(data);
  }, []);

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleBackClick = () => {
    setSearchField('')
    setSelectedRegion('')
    navigate('/');
  }

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    navigate(`/:${country.alpha3Code}`);
  }

  const toggleTheme = () => {
    setTheme(theme => theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  };

  const filteredCountries = countries.filter(country => {
    const nameMatch = country.name.toLowerCase().includes(searchField.toLowerCase());
    const regionMatch = selectedRegion === '' || country.region === selectedRegion;
    return nameMatch && regionMatch;
  });

  return (
    <Provider store={store}>
      <section style={{
      background: contextTheme.background,
      color: contextTheme.text
    }}>
      <NavBar toggleTheme={toggleTheme}/>
        <Routes>
          <Route path='/' element={
            <Card
              countries={filteredCountries}
              handleSearchChange={handleSearchChange}
              handleFilterChange={handleFilterChange}
              onCountryClick={handleCountryClick}
              selectedCountry={selectedCountry}
            />}
          />
          <Route path='/:countryCode' element={
            <Container
              selectedCountry={selectedCountry}
              onBackClick={handleBackClick}
              onCountryClick={handleCountryClick}
              countries={countries}
            />}
          />
        </Routes>
      </section>
    </Provider>
    
  );
}
export default App;