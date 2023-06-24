/** @format */

import React from "react";
import { url } from "../../locale/url";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
	const navigate = useNavigate();
	const resMenuHandler = () => {
		navigate(`/resturants/${props.resId}`);
	};
	return (
		<div
			className='card-body'
			onClick={resMenuHandler}>
			<img
				className='food-img'
				src={url + props.imgId}
				alt='food-logo'
			/>
			<div>
				<h3>{props.name}</h3>
				<p>{props.cusine}</p>
			</div>
			<div className='rating'>
				<h5>{props.rating} stars</h5>
				<ul>
					<li className='padding-r-20'>
						<h5>{props.eta}</h5>
					</li>
					<li className='padding-l-20'>
						{" "}
						<h5>{props.amountfor2}</h5>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Card;
