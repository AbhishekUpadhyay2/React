/** @format */

import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();

	return (
		<div>
			<h1>OOPS...</h1>
			<h4>SomeThing went wrong</h4>
			<h3>
				{err.status}:{err.statusText}
			</h3>
			<h5>{err.data}</h5>
		</div>
	);
};

export default Error;
