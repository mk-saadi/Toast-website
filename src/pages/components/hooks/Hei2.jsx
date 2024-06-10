import React from "react";

const Hei2 = ({ children, classname }) => {
	return (
		<p
			className={`text-3xl font-bold uppercase ${classname} font-serif`}
			style={{
				color: "var(--text-color-dark-white)",
			}}
		>
			{children}
		</p>
	);
};

export default Hei2;
