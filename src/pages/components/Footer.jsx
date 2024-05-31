const Footer = () => {
	const currentDate = new Date();

	// Extract the current year from the Date object
	const currentYear = currentDate.getFullYear();
	return (
		<div
			className="flex items-center justify-center w-full px-6 py-2.5"
			style={{
				color: "var(--text-color-white-white)",
				backgroundColor: "var(--default)",
			}}
		>
			<h2>Copyright © {currentYear} mk-saadi/Muhiuddin_Khaled</h2>
		</div>
	);
};

export default Footer;
