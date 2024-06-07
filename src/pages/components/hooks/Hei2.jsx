import React from "react";

const Hei2 = ({ children, classname }) => {
	return (
		<p
			className={`text-2xl font-semibold uppercase ${classname}`}
			style={{
				color: "var(--text-color-dark-white)",
			}}
		>
			{children}
		</p>
	);
};

export default Hei2;
