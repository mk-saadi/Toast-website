const CustomSpan = ({ children, style }) => {
	const defaultStyle = {
		backgroundColor: "var(--ghost)",
		borderRadius: "var(--borderRadius)",
		...style,
	};

	return (
		<span
			style={defaultStyle}
			className={`py-[2px] px-1 text-error`}
		>
			{children}
		</span>
	);
};

export default CustomSpan;
