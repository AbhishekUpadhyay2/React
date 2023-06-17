/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = { resturantData: [] };

const topRatedResSlice = createSlice({
	name: "topRated",
	initialState,
	reducers: {
		topRatedResturant(state, action) {
			state.resturantData = action.payload;
		},
	},
});

export const { topRatedResturant } = topRatedResSlice.actions;
export default topRatedResSlice.reducer;
