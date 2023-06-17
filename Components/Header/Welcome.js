/** @format */

import Body from "../Body/Body";
import Header from "./Header";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../About";
import { store } from "../Redux/store";
import { Provider } from "react-redux";

const WelcomeComponent = () => {
	return (
		<div className='app'>
			<Provider store={store}>
				<Header />
				<Outlet />
			</Provider>
		</div>
	);
};

export default WelcomeComponent;
