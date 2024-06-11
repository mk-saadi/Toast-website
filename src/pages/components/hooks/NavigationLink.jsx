import { Link } from "react-router-dom";

const NavigationLink = ({ direction, to, routeName }) => {
	if (!to || !routeName) return null;

	return (
		<Link
			to={to}
			className="flex flex-col justify-start px-6 py-2"
			style={{
				color: "var(--text-color-dark-white)",
				backgroundColor: "var(--default)",
				borderRadius: "var(--borderRadius)",
			}}
		>
			<p>{direction}</p>
			<p className="text-base italic font-medium">{routeName}</p>
		</Link>
	);
};

export default NavigationLink;
