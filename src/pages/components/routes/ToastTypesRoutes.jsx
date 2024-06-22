import NavigationLink from "../hooks/NavigationLink";

const ToastTypesRoutes = () => {
	return (
		<>
			<NavigationLink
				to={"/toast-setup"}
				routeName={"/Toast Setup"}
				direction={"Previous"}
			/>
			<NavigationLink
				to={"/toast-customizations"}
				routeName={"/Toast Customizations"}
				direction={"Next"}
			/>
		</>
	);
};

export default ToastTypesRoutes;
