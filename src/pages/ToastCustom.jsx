import { useEffect } from "react";
import useScrollToTop from "./components/hooks/useScrollToTop";
import Hbreads from "./components/hooks/Hbreads";
import ToastCustomRoutes from "./components/routes/ToastCustomRoutes";
import ToastColor from "./components/custom-components/TextColor";
import Background from "./components/custom-components/Bacnkground";
import CustomLink from "./components/custom-components/CustomLink";
import Hei2 from "./components/hooks/Hei2";
import Position from "./components/custom-components/Position";
import Transition from "./components/custom-components/Transition";
import ToastFooter from "./components/custom-components/ToastFooter";
import CancelButton from "./components/custom-components/CancelButton";
import Align from "./components/custom-components/Align";
import Shadows from "./components/custom-components/Shadows";
import Radius from "./components/custom-components/Radius";
import Skew from "./components/custom-components/Skew";
import Extra from "./components/custom-components/Extra";

const ToastCustom = () => {
	useScrollToTop();

	useEffect(() => {
		const handleHashChange = () => {
			const id = window.location.hash.replace("#", "");
			if (id) {
				const element = document.getElementById(id);
				if (element) {
					const yOffset = -60;
					const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
					window.scrollTo({ top: y, behavior: "smooth" });
				}
			}
		};

		window.addEventListener("hashchange", handleHashChange, false);
		return () => window.removeEventListener("hashchange", handleHashChange, false);
	}, []);

	return (
		<div
			className="flex flex-col min-h-screen"
			style={{ color: "var(--text-color-dark-white)" }}
		>
			<Hbreads>Toast Customizations</Hbreads>

			<Hei2>Toast Customizations</Hei2>

			<div className="flex flex-col gap-y-14">
				<>
					<CustomLink />
				</>

				<div className="flex flex-col gap-y-28">
					<>
						<ToastColor />
					</>
					<>
						<Background />
					</>
					<>
						<Position />
					</>
					<>
						<Align />
					</>
					<>
						<Transition />
					</>
					<>
						<ToastFooter />
					</>
					<>
						<CancelButton />
					</>
					<>
						<Shadows />
					</>
					<>
						<Radius />
					</>
					<>
						<Skew />
					</>
					<>
						<Extra />
					</>
				</div>

				<div className="flex justify-between w-full">
					<ToastCustomRoutes />
				</div>
			</div>
		</div>
	);
};

export default ToastCustom;
