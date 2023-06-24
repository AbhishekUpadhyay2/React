/** @format */

import React from "react";

const useParamCopy = () => {
	let url = window.location.href.split("/");

	return { data: url[url.length - 1] };
	//return data ;
};

export default useParamCopy;
