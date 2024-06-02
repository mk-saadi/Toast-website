import Hbreads from "./components/hooks/Hbreads";
import useScrollToTop from "./components/hooks/useScrollToTop";
import ToastTypesRoutes from "./components/routes/ToastTypesRoutes";

const ToastTypes = () => {
	useScrollToTop();

	return (
		<div
			className="flex flex-col min-h-screen"
			style={{ color: "var(--text-color-dark-white)" }}
		>
			<Hbreads>Toast Types</Hbreads>

			<div className="flex flex-col gap-y-14">
				<div className="flex justify-between w-full">
					<ToastTypesRoutes />
				</div>
			</div>
		</div>
	);
};

export default ToastTypes;
