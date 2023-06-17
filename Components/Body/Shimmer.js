/** @format */

import React from "react";

const Shimmer = () => {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
	return (
		<div className='shimmer-container'>
			{arr.map((v, i) => (
				<div
					className='shimmer-card'
					key={i}></div>
			))}
		</div>
	);
};

export default Shimmer;
