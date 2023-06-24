/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
const NavItems = () => {
	// const [num, setNum] = useState(0);
	// useEffect(() => {
	// 	console.log("useEffect Called");
	// 	setNum(num + 1);
	// }, []);
	const [isLogeedIn, setIsLoggedIn] = useState(false);
	const isOnline = useOnlineStatus();
	useEffect(() => console.log("useEffect Called"));
	return (
		<div className='nav-items'>
			<ul>
				<li>
					{isOnline ? (
						<div className='green round'></div>
					) : (
						<div className='red round'></div>
					)}
				</li>
				<li>
					<Link
						className='link-cls'
						to={"/"}>
						Home
					</Link>
				</li>
				<li>
					<Link
						className='link-cls'
						to='/about'>
						About Us
					</Link>
				</li>
				<li>
					<Link
						className='link-cls'
						to={"/contact"}>
						Contact us
					</Link>
				</li>
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
