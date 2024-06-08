import NavigationLink from "../hooks/NavigationLink";

const HomeRoutes = () => {
	return (
		<NavigationLink
			to={"/pages/toast-setup"}
			routeName={"/pages/Toast setup"}
			direction={"Next"}
		/>
	);
};

export default HomeRoutes;
