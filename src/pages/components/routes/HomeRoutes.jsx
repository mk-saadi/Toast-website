import NavigationLink from "../hooks/NavigationLink";

const HomeRoutes = () => {
	return (
		<NavigationLink
			to={"/pages/toast-usage"}
			routeName={"Toast Usage"}
			direction={"Next"}
		/>
	);
};

export default HomeRoutes;
