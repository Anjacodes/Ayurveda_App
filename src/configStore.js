import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { doshaDetailsReducer } from './redux/doshas/doshaDetailsSlice';
import { doshasReducer } from './redux/doshas/doshasSlice';

const reducer = {
  doshas: doshasReducer,
  doshaDetails: doshaDetailsReducer
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
