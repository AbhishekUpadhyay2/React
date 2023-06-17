/** @format */

import React, { useEffect } from "react";
import data from "../../locale/data.json";
import { useSelector, useDispatch } from "react-redux";

const TopRatedRestaurant = ({ getresturantList }) => {
	const data = useSelector((state) => state.resturantDetails);
	const handleSearch = () => {
		const topRatedRestaurant = data.resturantData.filter(
			(d) => parseInt(d.data.avgRating) >= 4
		);
		getresturantList(topRatedRestaurant);
	};

	return (
		<button
			className='btn filter-btn'
			onClick={handleSearch}>
			Top Rated Resturant
		</button>
	);
};

export default TopRatedRestaurant;
