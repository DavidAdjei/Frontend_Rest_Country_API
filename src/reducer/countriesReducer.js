// reducers/countriesReducer.js
const initialState = {
  countries: [],
  searchField: '',
  selectedRegion: '',
  selectedCountry: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      };
    case 'SET_SEARCH_FIELD':
      return {
        ...state,
        searchField: action.payload,
      };
    case 'SET_SELECTED_REGION':
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case 'SET_SELECTED_COUNTRY':
      return {
        ...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};


export const SET_COUNTRIES = 'SET_COUNTRIES';
export const SET_SEARCH_FIELD = 'SET_SEARCH_FIELD';
export const SET_SELECTED_REGION = 'SET_SELECTED_REGION';
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setSearchField = (searchField) => ({
  type: SET_SEARCH_FIELD,
  payload: searchField,
});

export const setSelectedRegion = (selectedRegion) => ({
  type: SET_SELECTED_REGION,
  payload: selectedRegion,
});

export const setSelectedCountry = (selectedCountry) => ({
  type: SET_SELECTED_COUNTRY,
  payload: selectedCountry,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});


