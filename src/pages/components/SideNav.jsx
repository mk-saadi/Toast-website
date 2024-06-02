import classNames from "classnames";
import useTheme from "./useTheme";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SideNav = () => {
	const theme = useTheme();

	const activeStyle = {
		backgroundColor: "var(--primary)",
		color: "var(--text-white)",
		borderStartStartRadius: "var(--borderRadius)",
		borderEndStartRadius: "var(--borderRadius)",
	};

	return (
		<div
			className={classNames("h-full", {
				"bg-base-100": theme === "nord" || theme === "sunset",
			})}
			style={{
				color: "var(--text-color-white-white)",
				borderRight: "2px solid var(--default)",
			}}
		>
			<ul className="pt-20 duration-200">
				{[
					["/pages/home", "Home"],
					["/pages/toast-usage", "Toast Usage"],
					["/pages/toast-types", "Toast Types"],
					["/pages/toast-customizations", "Toast Customizations"],
				].map(([to, text]) => (
					<li
						key={to}
						className="flex flex-col justify-end"
					>
						<NavLink
							to={to}
							style={({ isActive }) =>
								isActive
									? activeStyle
									: {
											color: "var(--text-color-dark-white)",
											borderStartStartRadius: "var(--borderRadius)",
											borderEndStartRadius: "var(--borderRadius)",
									  }
							}
							className="px-5 py-2.5 my-1.5 text-start flex justify-start items-center border-none rounded-none no-animation bg-slate-700/10"
						>
							{text}
							<NavLink to={to}>
								{({ isActive }) => isActive && <ChevronRight size={18} />}
							</NavLink>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideNav;
