const Footer = () => {
	const currentDate = new Date();

	const currentYear = currentDate.getFullYear();
	return (
		<div
			className="flex items-center justify-center w-full px-6 font-serif font-bold py-7"
			style={{
				color: "var(--text-color-dark-white)",
				backgroundColor: "var(--default)",
			}}
		>
			<p>Copyright © {currentYear} mk-saadi / Muhiuddin_Khaled</p>
		</div>
	);
};

export default Footer;
