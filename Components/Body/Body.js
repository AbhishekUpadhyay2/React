/** @format */

import React, { useEffect, useState } from "react";
import Search from "./Search";
import CardContainer from "./CardContainer";
import { useDispatch, useSelector } from "react-redux";
import "./Body.css";
import TopRatedRestaurant from "./TopRatedRestaurant";
import { topRatedResturant } from "../Redux/Reducers/topRatedRes";

const Body = () => {
	const dispatch = useDispatch();
	const resData = useSelector((state) => state.resturantDetails);
	const [resturantList, setResturantList] = useState([]);
	const [showNoData, setShowNoData] = useState(false);
	//console.log(resData);
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		setResturantList(resData.resturantData);
	}, [resData]);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		dispatch(topRatedResturant(json?.data?.cards[2]?.data?.data?.cards));
	};
	const getresturantList = (val) => {
		if (!val.length) {
			setShowNoData(true);
		} else setShowNoData(false);
		setResturantList(val);
	};
	return (
		<div className='body'>
			<Search getresturantList={getresturantList} />
			<TopRatedRestaurant getresturantList={getresturantList} />
			<CardContainer
				resturantList={resturantList}
				showNoData={showNoData}
			/>
		</div>
	);
};

export default Body;
