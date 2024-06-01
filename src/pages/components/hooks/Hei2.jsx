import React from "react";

const Hei2 = ({ children }) => {
	return (
		<p
			className="text-2xl font-semibold uppercase"
			style={{
				color: "var(--text-color-dark-white)",
			}}
		>
			{children}
		</p>
	);
};

export default Hei2;
