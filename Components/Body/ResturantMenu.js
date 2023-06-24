/** @format */

import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../locale/url";
import ItemMenu from "./ItemMenu";
import useResturantMenu from "../customHooks/useResturantMenu";
import useParamCopy from "../customHooks/useParamCopy";

const ResturantMenu = () => {
	const { data } = useParamCopy();
	console.log(data);
	const { resId } = useParams();
	const resInfo = useResturantMenu(resId);

	const {
		name,
		cuisines,
		costForTwoMessage,
		avgRatingString,
		totalRatingsString,
		veg,
	} = resInfo?.cards[0]?.card?.card?.info || {};

	return resInfo ? (
		<div className='body center-body'>
			<div className='flex-class'>
				<div>
					<p className='res-head'>{name}</p>
					<p className='res-type'>
						{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
					</p>
				</div>
				<div>
					<button className='rating-btn'>
						<span className='rating-btn-star'>
							{resInfo?.cards[0]?.card?.card?.info?.avgRatingString}
						</span>
						<span className='rating-btn-reviewcount'>
							{resInfo?.cards[0]?.card?.card?.info?.totalRatingsString}
						</span>
					</button>
				</div>
			</div>
			<hr className='dash-line' />
			{veg ? "PureVeg" : ""}
			<div className='space'></div>
			<ItemMenu data={resInfo} />
		</div>
	) : (
		<Shimmer />
	);
};

export default ResturantMenu;
