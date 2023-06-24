/** @format */

import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../../locale/data.json";
import { useSelector, useDispatch } from "react-redux";
import { topRatedResturant } from "../Redux/Reducers/topRatedRes";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../customHooks/useOnlineStatus";

const CardContainer = ({ resturantList, showNoData }) => {
	const [restaurantdata, setRestaurantdata] = useState([]);
	const isOnline = useOnlineStatus();
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

	//console.log(isOnline);
	if (!isOnline) return <h2>Check your internet connection...</h2>;

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
					resId={d.data.id}
				/>
			))}
		</div>
	);
};

export default CardContainer;
