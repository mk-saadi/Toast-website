const ItalicText = ({ children, classname }) => {
	return (
		<p
			className={`text-lg italic font-medium ${classname}`}
			style={{ color: "var(--text-color-dark-white)" }}
		>
			{children}
		</p>
	);
};

export default ItalicText;
