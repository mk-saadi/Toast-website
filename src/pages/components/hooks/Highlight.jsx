const CustomSpan = ({ children }) => {
	return (
		<span
			style={{
				backgroundColor: "var(--ghost)",
				borderRadius: "var(--borderRadius)",
			}}
			className={`py-[2px] px-1.5 text-error`}
		>
			{children}
		</span>
	);
};

export default CustomSpan;
