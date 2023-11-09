import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addOne: (state) => {
			state.value += 1;
		},
		subtractOne: (state) => {
			state.value -= 1;
		},
		addAmount: (state, action) => {
			state.value += action.payload;
		},
		subtractAmount: (state, action) => {
			state.value -= action.payload;
		},
	},
});

export const { addOne, subtractOne, addAmount, subtractAmount } = counterSlice.actions;
export default counterSlice.reducer;
