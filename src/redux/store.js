import { configureStore } from '@reduxjs/toolkit';
import employerReducer from './employerSlice';

export const store = configureStore({
	reducer: {
		employers: employerReducer,
	}
})