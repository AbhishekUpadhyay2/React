/** @format */

import Body from "../Body/Body";
import Header from "./Header";
import { useEffect, useState } from "react";

const WelcomeComponent = () => {
	return (
		<div className='app'>
			<Header />
			<Body />
		</div>
	);
};

export default WelcomeComponent;
