import NavigationLink from "../hooks/NavigationLink";

const ToastCustomRoutes = () => {
	return (
		<NavigationLink
			to={"/pages/toast-types"}
			routeName={"/pages/Toast Types"}
			direction={"Previous"}
		/>
	);
};

export default ToastCustomRoutes;
