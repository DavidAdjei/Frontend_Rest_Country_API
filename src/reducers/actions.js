export const setSearchField = (text) => ({
  type: 'SET_SEARCH_FIELD',
  payload: text,
});

export const setSelectedRegion = (region) => ({
  type: 'SET_SELECTED_REGION',
  payload: region,
});

export const setSelectedCountry = (country) => ({
  type: 'SET_SELECTED_COUNTRY',
  payload: country,
});

export const toggleTheme = () => ({
  type: 'TOGGLE_THEME',
});
