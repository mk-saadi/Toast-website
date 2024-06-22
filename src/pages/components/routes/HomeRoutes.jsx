import NavigationLink from "../hooks/NavigationLink";

const HomeRoutes = () => {
	return (
		<NavigationLink
			to={"/toast-setup"}
			routeName={"/Toast setup"}
			direction={"Next"}
		/>
	);
};

export default HomeRoutes;
