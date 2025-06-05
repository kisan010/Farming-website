
import { configureStore } from '@reduxjs/toolkit';
import Productreducer from './Productslice';
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    Products: Productreducer,
     auth: authReducer,
  }
});
