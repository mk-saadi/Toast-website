const Button = ({ children, clickAction, classname, type }) => {
	return (
		<>
			<button
				style={{ color: "var(--text-color-dark-dark)", borderRadius: "var(--borderRadius)" }}
				className={`text-base w-fit px-4 py-1.5 mt-2 duration-200 rounded-none bg-accent font-medium ${classname} active:scale-[0.97] duration-200`}
				onClick={clickAction}
				type={type}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
