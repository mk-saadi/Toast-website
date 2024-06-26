import ToastProviderRoutes from "./components/routes/ToastProviderRoutes";
import useScrollToTop from "./components/hooks/useScrollToTop";
import Hbreads from "./components/hooks/Hbreads";
import Instructions from "./components/provider-components/Instructions";
import Usage from "./components/provider-components/Usage";

const Toast_Provider = () => {
	useScrollToTop();

	return (
		<div
			className="flex flex-col min-h-screen"
			style={{ color: "var(--text-color-dark-white)" }}
		>
			<Hbreads>Toast Usage</Hbreads>

			<div className="flex flex-col gap-y-14">
				<Instructions />

				<Usage />

				<div className="flex justify-between w-full">
					<ToastProviderRoutes />
				</div>
			</div>
		</div>
	);
};

export default Toast_Provider;
