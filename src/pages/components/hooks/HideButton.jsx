const HideButton = ({ children, clickAction, classname }) => {
	return (
		<>
			<button
				type="button"
				style={{ color: "var(--text-color-dark-white2)", borderRadius: "var(--borderRadius)" }}
				className={`text-base w-fit px-[15px] py-[5px] duration-200 rounded-none outline outline-1 outline-error hover:bg-error font-medium active:scale-[0.97] ${classname} mt-2`}
				onClick={clickAction}
			>
				{children}
			</button>
		</>
	);
};

export default HideButton;
