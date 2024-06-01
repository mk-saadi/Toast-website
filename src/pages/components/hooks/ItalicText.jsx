const ItalicText = ({ children }) => {
	return (
		<p
			className="text-lg italic font-medium"
			style={{ color: "var(--text-color-dark-white)" }}
		>
			{children}
		</p>
	);
};

export default ItalicText;
