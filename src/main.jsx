import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./index.css";
import { ToastProvider } from "react-toast-master";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Toast_Provider from "./pages/ToastProvider";
import ToastTypes from "./pages/ToastTypes";
import ToastCustom from "./pages/ToastCustom";
import { ThemeProvider } from "./pages/ThemeProvider";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/toast-setup",
				element: <Toast_Provider />,
			},
			{
				path: "/toast-types",
				element: <ToastTypes />,
			},
			{
				path: "/toast-customizations",
				element: <ToastCustom />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ToastProvider>
			<ThemeProvider>
				<div className="flex flex-col min-h-screen">
					<RouterProvider router={router} />
				</div>
			</ThemeProvider>
		</ToastProvider>
	</React.StrictMode>
);
