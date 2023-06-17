/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";

const Search = ({ getresturantList }) => {
	const [serachParam, setSearchParam] = useState("");
	const totalResData = useSelector((state) => state.resturantDetails);
	const handleSearch = () => {
		//console.log(serachParam);
		let filteredRes = totalResData.resturantData.filter((res) =>
			res.data.name.toUpperCase().includes(serachParam.toUpperCase())
		);
		getresturantList(filteredRes);
	};

	return (
		<div className='search-wrapper'>
			<input
				className='search-input'
				type='text'
				placeholder='Enter food or restaurant'
				value={serachParam}
				onChange={(e) => {
					setSearchParam(e.target.value);
				}}
			/>
			<button
				className='search-btn'
				type='button'
				onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default Search;
