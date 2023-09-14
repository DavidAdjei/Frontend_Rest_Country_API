// reducers/store.js
import { createStore, combineReducers } from 'redux';
import { countriesReducer } from './countriesReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export const store = createStore(rootReducer);

