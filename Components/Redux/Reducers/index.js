/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import topRatedResturant from "./topRatedRes";

const rootReducer = combineReducers({
	resturantDetails: topRatedResturant,
});

export default rootReducer;
