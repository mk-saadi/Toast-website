const Button = ({ children, clickAction }) => {
	return (
		<>
			<button
				style={{ color: "var(--text-white)", borderRadius: "var(--borderRadius)" }}
				className="w-fit px-6 py-2.5 mt-2 duration-200 rounded-none bg-primary active:scale-[.97] font-medium"
				onClick={clickAction}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
