const HideButton = ({ children, clickAction }) => {
	return (
		<>
			<button
				style={{ color: "var(--text-color-dark-white)", borderRadius: "var(--borderRadius)" }}
				className="text-base w-fit px-[15px] py-[5px] duration-200 rounded-none outline outline-1 outline-primary hover:bg-primary font-medium active:scale-[0.97]"
				onClick={clickAction}
			>
				{children}
			</button>
		</>
	);
};

export default HideButton;
