import { Home } from "lucide-react";

const Hbreads = ({ children }) => {
	return (
		<div
			className="mb-3 text-sm breadcrumbs"
			style={{
				color: "var(--text-color-dark-white)",
			}}
		>
			<ul>
				<li>
					<Home size={18} />
				</li>
				<li>{children}</li>
			</ul>
		</div>
	);
};

export default Hbreads;
