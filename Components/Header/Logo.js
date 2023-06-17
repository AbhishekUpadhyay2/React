/** @format */

import React from "react";
import { LOGO_URL } from "../../locale/url";
const Logo = () => {
	return (
		<div className='logo-container'>
			<img
				className='logo'
				src={LOGO_URL}
				alt='food app'
			/>
			<span className='appname'>GreatFood.com</span>
		</div>
	);
};

export default Logo;
