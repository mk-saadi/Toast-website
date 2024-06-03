import NavigationLink from "../hooks/NavigationLink";

const ToastProviderRoutes = () => {
	return (
		<>
			<NavigationLink
				direction={"Previous"}
				to={"/pages/home"}
				routeName={"/pages/Home"}
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
