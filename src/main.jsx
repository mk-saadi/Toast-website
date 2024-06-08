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
import Toasts from "./pages/components/Toasts";
import { ThemeProvider } from "./pages/ThemeProvider";

const router = createBrowserRouter([
	{
		path: "/pages",
		element: <Layout />,
		children: [
			{
				path: "/pages/introduction",
				element: <Home />,
			},
			{
				path: "/pages/toast-setup",
				element: <Toast_Provider />,
			},
			{
				path: "/pages/toast-types",
				element: <ToastTypes />,
			},
			{
				path: "/pages/toast-customizations",
				element: <ToastCustom />,
			},
		],
	},
	{
		path: "toasts",
		element: <Toasts />,
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
