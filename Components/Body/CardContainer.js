/** @format */

import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../../locale/data.json";

const CardContainer = () => {
	const [restaurantdata, setRestaurantdata] = useState([]);
	useEffect(() => {
		let res = data.filter((d) => d.category == "offers near you");
		res = res.map((d) => d.restaurantList);
		setRestaurantdata(res[0]);
	}, []);
	return (
		<div className='card-container'>
			{restaurantdata.map((d, i) => (
				<Card
					name={d.name}
					cusine={d.food_types?.join(", ")}
					imgId={d.cloudinaryImageId}
					rating={d.ratings}
					eta={d.delivery_time}
					amountfor2={d.price_for_two}
				/>
			))}
		</div>
	);
};

export default CardContainer;
