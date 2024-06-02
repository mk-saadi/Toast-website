import React from "react";
import useScrollToTop from "./components/hooks/useScrollToTop";
import Hbreads from "./components/hooks/Hbreads";
import ToastCustomRoutes from "./components/routes/ToastCustomRoutes";

const ToastCustom = () => {
	useScrollToTop();

	return (
		<div
			className="flex flex-col min-h-screen"
			style={{ color: "var(--text-color-dark-white)" }}
		>
			<Hbreads>Toast Customizations</Hbreads>

			<div className="flex flex-col gap-y-14">
				<div className="flex justify-between w-full">
					<ToastCustomRoutes />
				</div>
			</div>
		</div>
	);
};

export default ToastCustom;
