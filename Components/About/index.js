/** @format */

import React from "react";
import UserClass from "./UserClass";

const About = () => {
	return (
		<div className='body'>
			<h1>About</h1>
			<UserClass
				name='Abhishek'
				location='Bihar'
			/>
		</div>
	);
};

export default About;
