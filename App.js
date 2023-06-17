/** @format */

import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import WelcomeComponent from "./Components/Header/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error";
import Body from "./Components/Body/Body";

/** Food Ordering App
 * Header
 *   -- logo
 *   -- NavItems
 * Body
 *   --Search
 *   --Card Container
 *   --Card
 * Footer
 *  --Copyright
 *  --Adress
 *  --links
 */

const Applayout = () => (
	<div>
		<WelcomeComponent />
	</div>
);

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <WelcomeComponent />,
		errorElement: <Error />,
		children: [
			{ path: "/about", element: <About /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "/", element: <Body /> },
		],
	},
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
