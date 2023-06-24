/** @format */

import { MENU_URL } from "../../locale/url";
import React, { useEffect, useState } from "react";

const useResturantMenu = (resId) => {
	const [resturantInfo, setResturantInfo] = useState(null);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const data = await fetch(MENU_URL + resId + "&submitAction=ENTER");
		const json = await data.json();
		setResturantInfo(json.data);
	};
	return resturantInfo;
};

export default useResturantMenu;
