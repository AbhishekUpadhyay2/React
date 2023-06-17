/** @format */

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import "./Header.css";

const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<NavItems />
		</div>
	);
};

export default Header;
