/** @format */

import React, { useState } from "react";
import { ITEM_URL } from "../../locale/url";
import emptyFood from "../../locale/img/empty_food.png";
import Image from "./Image";

const ItemMenu = (props) => {
	const [show, setShow] = useState(true);
	const data = props.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
	let d = data.filter((d) => d.card.card.title && d.card.card.itemCards);
	const handleCollapse = (e) => {
		console.log(e.target.id + e.target.innerText);
		let elem = document.getElementById(e.target.id + e.target.innerText);
		if (elem.style.display !== "none") {
			elem.style.display = "none";
		} else elem.style.removeProperty("display");
	};
	return (
		<div>
			{d.map((val, i) => (
				<div id={i + Math.random()}>
					<button
						className='item-btn'
						onClick={handleCollapse}>
						<h3>
							<span
								id={i}
								value={val.card.card.title}>
								{val.card.card.title}
							</span>
						</h3>
						<span
							className='icon-downArrow styles_open__3WxOr'
							aria-hidden='true'></span>
					</button>
					<div id={i + val.card.card.title}>
						{val.card.card.itemCards.map((k) => (
							<div key={k.card.info.id}>
								<div className='item-container flex-class'>
									<div>
										<div className='item-details'>{k.card.info.name}</div>
										<div className='rupee'>{k.card.info.price / 100}</div>
										<div className='food-desc'>{k.card.info.description}</div>
									</div>
									<div className='item-images'>
										<img
											src={ITEM_URL + k.card.info.imageId}
											alt='food_image'
											className='item-img'
										/>
									</div>
								</div>
								<div className='space'></div>
							</div>
						))}
					</div>
					<div className='blank-border'></div>
				</div>
			))}
		</div>
	);
};

export default ItemMenu;
