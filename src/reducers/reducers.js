import { combineReducers } from 'redux';

const searchFieldReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_FIELD':
      return action.payload;
    default:
      return state;
  }
};

const selectedRegionReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SELECTED_REGION':
      return action.payload;
    default:
      return state;
  }
};

const selectedCountryReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_SELECTED_COUNTRY':
      return action.payload;
    default:
      return state;
  }
};

const themeReducer = (state = 'lightTheme', action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchField: searchFieldReducer,
  selectedRegion: selectedRegionReducer,
  selectedCountry: selectedCountryReducer,
  theme: themeReducer,
});

export default rootReducer;
