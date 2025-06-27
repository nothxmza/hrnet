import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	employers: []
}

const employerSlice = createSlice({
	name: 'employer',
	initialState,
	reducers: {
		createEmployer: (state, action) => {
			state.employers.push(action.payload);
		}
	}
});

export const { createEmployer } = employerSlice.actions;
export default employerSlice.reducer;