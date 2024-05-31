import { Link } from "react-router-dom";

const HomeRoutes = () => {
	return (
		<>
			<Link
				to={"/pages/toast-provider"}
				className="flex px-6 py-2.5 flex-col justify-end bg-neutral"
				style={{
					color: "var(--text-color-white-white)",
				}}
			>
				<p>Next</p>
				<p
					className="text-lg italic font-medium"
					style={{
						borderRadius: "var(--borderRadius)",
						border: "var(--border)",
					}}
				>
					/pages/ToastProvider()
				</p>
			</Link>
		</>
	);
};

export default HomeRoutes;
