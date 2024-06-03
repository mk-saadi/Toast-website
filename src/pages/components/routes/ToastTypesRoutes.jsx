import NavigationLink from "../hooks/NavigationLink";

const ToastTypesRoutes = () => {
	return (
		<>
			<NavigationLink
				to={"/pages/toast-usage"}
				routeName={"/pages/Toast Usage"}
				direction={"Previous"}
			/>
			<NavigationLink
				to={"/pages/toast-customizations"}
				routeName={"/pages/Toast Customizations"}
				direction={"Next"}
			/>
		</>
	);
};

export default ToastTypesRoutes;
