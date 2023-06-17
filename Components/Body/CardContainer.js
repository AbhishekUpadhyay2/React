/** @format */

import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../../locale/data.json";
import { useSelector, useDispatch } from "react-redux";
import { topRatedResturant } from "../Redux/Reducers/topRatedRes";
import Shimmer from "./Shimmer";

const CardContainer = ({ resturantList, showNoData }) => {
	const [restaurantdata, setRestaurantdata] = useState([]);
	useEffect(() => {
		setRestaurantdata(resturantList);
	}, [resturantList]);

	if (restaurantdata?.length === 0) {
		return showNoData ? (
			<h5 className='noDataErr'>No Data Found...</h5>
		) : (
			<Shimmer />
		);
	}
	return (
		<div className='card-container'>
			{restaurantdata?.map?.((d, i) => (
				<Card
					key={d.data.id}
					name={d.data.name}
					cusine={d.data.cuisines?.join(", ")}
					imgId={d.data.cloudinaryImageId}
					rating={d.data.avgRating}
					eta={d.data.slaString}
					amountfor2={d.data.costForTwoString}
				/>
			))}
		</div>
	);
};

export default CardContainer;
