import NavigationLink from "../hooks/NavigationLink";

const ToastProviderRoutes = () => {
	return (
		<>
			<NavigationLink
				direction={"Previous"}
				to={"/pages/introduction"}
				routeName={"/pages/introduction"}
			/>
			<NavigationLink
				direction={"Next"}
				to={"/pages/toast-types"}
				routeName={"/pages/Toast Types"}
			/>
		</>
	);
};

export default ToastProviderRoutes;
