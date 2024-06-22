import NavigationLink from "../hooks/NavigationLink";

const ToastProviderRoutes = () => {
	return (
		<>
			<NavigationLink
				direction={"Previous"}
				to={"/"}
				routeName={"/introduction"}
			/>
			<NavigationLink
				direction={"Next"}
				to={"/toast-types"}
				routeName={"/Toast Types"}
			/>
		</>
	);
};

export default ToastProviderRoutes;
