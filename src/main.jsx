import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./index.css";
import { ToastProvider } from "react-toast-master";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Toast_Provider from "./pages/ToastProvider";

const router = createBrowserRouter([
	{
		path: "/pages",
		element: <Layout />,
		children: [
			{
				path: "/pages/home",
				element: <Home />,
			},
			{
				path: "/pages/toast-provider",
				element: <Toast_Provider />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ToastProvider>
			<div className="flex flex-col min-h-screen">
				<RouterProvider router={router} />
			</div>
		</ToastProvider>
	</React.StrictMode>
);
