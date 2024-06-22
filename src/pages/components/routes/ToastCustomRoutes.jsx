import NavigationLink from "../hooks/NavigationLink";

const ToastCustomRoutes = () => {
	return (
		<NavigationLink
			to={"/toast-types"}
			routeName={"/Toast Types"}
			direction={"Previous"}
		/>
	);
};

export default ToastCustomRoutes;
