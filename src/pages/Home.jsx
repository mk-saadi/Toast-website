import classNames from "classnames";
import useTheme from "./components/useTheme";

import HomeRoutes from "./components/routes/HomeRoutes";
import Hcodes from "./components/home-components/Hcodes";
import Hbreads from "./components/breads/Hbreads";
import Installations from "./components/home-components/Installations";
import useScrollToTop from "./components/hooks.jsx/useScrollToTop";

const Home = () => {
	const theme = useTheme();
	useScrollToTop();

	return (
		<div
			className="flex flex-col w-full min-h-screen"
			style={{
				color: "var(--text-color-dark-white)",
			}}
		>
			<Hbreads />

			<div className="flex flex-col mt-3 gap-y-14">
				<div className="text-start">
					<h2 className="text-2xl font-semibold uppercase">Introducing</h2>
					<h1
						className={classNames("text-5xl font-bold uppercase mt-2 mb-1", {
							"": theme === "nord" || theme === "sunset",
						})}
					>
						react-toast-master
					</h1>
					<h3>React's most customizable toast component.</h3>
				</div>

				<div>
					<Installations />
				</div>

				<div className="rounded-none">
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

// <button
// 	className={classNames("btn no-animation", {
// 		"": theme === "nord" || theme === "sunset",
// 	})}
// 	style={{
// 		color: "var(--text-color-white-white)",
// 		backgroundColor: "var(--inverse-bg-100)",
// 	}}
// >
// 	Default
// </button>;
