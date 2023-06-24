/** @format */
import React, { useEffect, useState } from "react";
const useOnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(true);
	//check online status
	useEffect(() => {
		console.log("tada..");
		window.addEventListener("offline", () => {
			setOnlineStatus(false);
		});
		window.addEventListener("online", () => {
			setOnlineStatus(true);
		});
	}, []);

	return onlineStatus;
};

export default useOnlineStatus;
