/** @format */

import React, { useEffect, useState } from "react";
import data from "../../locale/data.json";
import { useSelector, useDispatch } from "react-redux";

const TopRatedRestaurant = ({ getresturantList }) => {
	const [showTopRated, setShowTopRated] = useState(false);
	const data = useSelector((state) => state.resturantDetails);
	const handleSearch = () => {
		setShowTopRated(!showTopRated);
		if (!showTopRated) {
			const topRatedRestaurant = data.resturantData.filter(
				(d) => parseInt(d.data.avgRating) >= 4
			);
			getresturantList(topRatedRestaurant);
		} else {
			getresturantList(data.resturantData);
		}
	};
	//change button to toggle
	return (
		// <button
		// 	className='btn filter-btn'
		// 	onClick={handleSearch}>
		// 	Top Rated Resturant
		// </button>
		<div>
			<div className='toggleWrapper'>
				<p>ALL Resturant</p>
				<input
					type='checkbox'
					id='dn'
					onChange={handleSearch}
				/>
				<label
					htmlFor='dn'
					className='toggle'></label>
				<p>TOP RATED Resturant</p>
			</div>
		</div>
	);
};

export default TopRatedRestaurant;
