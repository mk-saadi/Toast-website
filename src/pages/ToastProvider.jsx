import React from "react";
import ToastProviderRoutes from "./components/routes/ToastProviderRoutes";
import useScrollToTop from "./components/useScrollToTop";

const Toast_Provider = () => {
	useScrollToTop();

	return (
		<div className="h-[120vh] flex flex-col">
			<h1>Toast_Provider</h1>
			<div className="flex justify-between w-full">
				<ToastProviderRoutes />
			</div>
		</div>
	);
};

export default Toast_Provider;
