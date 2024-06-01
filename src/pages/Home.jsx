import HomeRoutes from "./components/routes/HomeRoutes";
import Hcodes from "./components/home-components/Hcodes";
import Hbreads from "./components/hooks/Hbreads";
import Installations from "./components/home-components/Installations";
import useScrollToTop from "./components/hooks/useScrollToTop";
import Intro from "./components/home-components/Intro";

const Home = () => {
	useScrollToTop();

	return (
		<div
			className="flex flex-col w-full min-h-screen"
			style={{
				color: "var(--text-color-dark-white)",
			}}
		>
			<Hbreads>We are already home</Hbreads>

			<div className="flex flex-col gap-y-14">
				<div className="text-start">
					<Intro />
				</div>

				<div>
					<Installations />
				</div>

				<div>
					<Hcodes />
				</div>

				<div className="flex justify-end w-full">
					<HomeRoutes />
				</div>
			</div>
		</div>
	);
};

export default Home;
