import { Link } from "react-router-dom";

const NavigationLink = ({ direction, to, routeName }) => {
	if (!to || !routeName) return null;

	return (
		<Link
			to={to}
			className="flex flex-col justify-start px-6 py-2 bg-neutral"
			style={{
				color: "var(--text-color-white-white)",
				borderRadius: "var(--borderRadius)",
			}}
		>
			<p>{direction}</p>
			<p
				className="text-base italic font-medium"
				style={{
					borderRadius: "var(--borderRadius)",
					border: "var(--border)",
				}}
			>
				{routeName}
			</p>
		</Link>
	);
};

export default NavigationLink;
