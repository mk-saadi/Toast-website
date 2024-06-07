import NavigationLink from "../hooks/NavigationLink";

const HomeRoutes = () => {
	return (
		<NavigationLink
			to={"/pages/toast-usage"}
			routeName={"/pages/Toast Usage"}
			direction={"Next"}
		/>
	);
};

export default HomeRoutes;
