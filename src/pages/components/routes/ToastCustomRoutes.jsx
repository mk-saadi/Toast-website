import { Link } from "react-router-dom";

const ToastCustomRoutes = () => {
	return (
		<>
			<Link
				to={"/pages/toast-options"}
				className="flex px-6 py-2.5 flex-col justify-end bg-neutral"
				style={{
					color: "var(--text-color-white-white)",
				}}
			>
				<p>Previous</p>
				<p
					className="text-lg font-medium italic"
					style={{
						borderRadius: "var(--borderRadius)",
						border: "var(--border)",
					}}
				>
					/pages/Toast Options
				</p>
			</Link>
		</>
	);
};

export default ToastCustomRoutes;
