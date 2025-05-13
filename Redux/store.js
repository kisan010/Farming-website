
import { configureStore } from '@reduxjs/toolkit';
import Productreducer from './Productslice'

export const store = configureStore({
  reducer: {
    Products: Productreducer
  }
});
