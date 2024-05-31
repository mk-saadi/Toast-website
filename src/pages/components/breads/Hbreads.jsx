import { Home } from "lucide-react";

const Hbreads = () => {
	return (
		<div
			className="text-sm breadcrumbs"
			style={{
				color: "var(--text-color-dark-white)",
			}}
		>
			<ul>
				<li>
					<Home size={18} />
				</li>
				<li>We are already home</li>
			</ul>
		</div>
	);
};

export default Hbreads;
