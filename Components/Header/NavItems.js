/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavItems = () => {
	// const [num, setNum] = useState(0);
	// useEffect(() => {
	// 	console.log("useEffect Called");
	// 	setNum(num + 1);
	// }, []);
	const [isLogeedIn, setIsLoggedIn] = useState(false);
	useEffect(() => console.log("useEffect Called"));
	return (
		<div className='nav-items'>
			<ul>
				<li>Home</li>
				<li>
					<a href='/about'>About Us</a>
				</li>
				<li>Contact us</li>
				<li>Cart</li>
				<button
					className='login'
					onClick={() => {
						setIsLoggedIn(!isLogeedIn);
					}}>
					{isLogeedIn ? "Logout" : "Login"}
				</button>
			</ul>
		</div>
	);
};

export default NavItems;
