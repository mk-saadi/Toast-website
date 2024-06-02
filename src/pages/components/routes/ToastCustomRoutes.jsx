import { Link } from "react-router-dom";

const ToastCustomRoutes = () => {
	return (
		<>
			<Link
				to={"/pages/toast-types"}
				className="flex px-6 py-2.5 flex-col justify-end bg-neutral"
				style={{
					color: "var(--text-color-white-white)",
				}}
			>
				<p>Previous</p>
				<p
					className="text-lg italic font-medium"
					style={{
						borderRadius: "var(--borderRadius)",
						border: "var(--border)",
					}}
				>
					/pages/Toast Types
				</p>
			</Link>
		</>
	);
};

export default ToastCustomRoutes;
