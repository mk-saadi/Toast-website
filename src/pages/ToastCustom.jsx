import { useEffect } from "react";
import useScrollToTop from "./components/hooks/useScrollToTop";
import Hbreads from "./components/hooks/Hbreads";
import ToastCustomRoutes from "./components/routes/ToastCustomRoutes";
import ToastColor from "./components/custom-components/TextColor";
import Background from "./components/custom-components/Bacnkground";
import CustomLink from "./components/custom-components/CustomLink";
import Hei2 from "./components/hooks/Hei2";
import { useToast } from "react-toast-master";
import { useTheme } from "./ThemeProvider";
import Position from "./components/custom-components/Position";

const ToastCustom = () => {
	useScrollToTop();

	useEffect(() => {
		const handleHashChange = () => {
			const id = window.location.hash.replace("#", "");
			if (id) {
				const element = document.getElementById(id);
				if (element) {
					const yOffset = -60;
					const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
					window.scrollTo({ top: y, behavior: "smooth" });
				}
			}
		};

		window.addEventListener("hashchange", handleHashChange, false);
		return () => window.removeEventListener("hashchange", handleHashChange, false);
	}, []);

	const theme = useTheme();
	console.log("theme: ", theme);
	const { toastMaster } = useToast();

	const showToast = () => {
		let toastType, toastBg, radius;

		if (theme === "nord") {
			toastType = "successWhite";
			toastBg = "gray";
			radius = "md";
		} else if (theme === "sunset") {
			toastType = "successDark";
			toastBg = "glass";
			radius = "sm";
		}

		toastMaster({
			type: toastType,
			message: "Copied!",
			bg: toastBg,
			radius: radius,
			transition: "down",
			cancelButton: true,
		});
	};

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

				<div className="flex flex-col gap-y-14">
					<>
						<ToastColor />
					</>
					<>
						<Background />
					</>
					<>
						<Position />
					</>
				</div>

				<div>
					<button onClick={showToast}>Show Toast</button>
				</div>

				<div className="flex justify-between w-full">
					<ToastCustomRoutes />
				</div>
			</div>
		</div>
	);
};

export default ToastCustom;
