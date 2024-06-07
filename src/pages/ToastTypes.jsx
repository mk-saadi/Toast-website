import { useEffect } from "react";
import Hbreads from "./components/hooks/Hbreads";
import Hei2 from "./components/hooks/Hei2";
import useScrollToTop from "./components/hooks/useScrollToTop";
import ToastTypesRoutes from "./components/routes/ToastTypesRoutes";
import ItalicText from "./components/hooks/ItalicText";
import CustomSpan from "./components/hooks/Highlight";
import CodeBlock from "./components/hooks/CodeBlock";
import Button from "./components/hooks/Button";
import TypeExample from "./components/type-components/TypeExample";

const ToastTypes = () => {
	useScrollToTop();

	useEffect(() => {
		const handleHashChange = () => {
			const id = window.location.hash.replace("#", "");
			if (id) {
				const element = document.getElementById(id);
				if (element) {
					const yOffset = -40;
					const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
					window.scrollTo({ top: y, behavior: "smooth" });
				}
			}
		};

		window.addEventListener("hashchange", handleHashChange, false);
		return () => window.removeEventListener("hashchange", handleHashChange, false);
	}, []);

	return (
		<div
			className="flex flex-col min-h-screen"
			style={{ color: "var(--text-color-dark-white)" }}
		>
			<Hbreads>Toast Types</Hbreads>

			<div className="flex flex-col gap-y-14">
				{/* <p>All the different types of toast are available in the Toast package.</p> */}
				<div>
					<Hei2>All Toast Types</Hei2>

					<p>Types of Toast available in the Toast package:</p>
					<ul className="ml-4 w-fit">
						<li className="flex items-center justify-start gap-x-1 group">
							<span className="duration-200 opacity-50 group-hover:opacity-100">#</span>
							<a href="#success">Success</a>
						</li>
						<li className="flex items-center justify-start gap-x-1 group">
							<span className="duration-200 opacity-50 group-hover:opacity-100">#</span>
							<a href="#error">Error</a>
						</li>
						<li className="flex items-center justify-start gap-x-1 group">
							<span className="duration-200 opacity-50 group-hover:opacity-100">#</span>
							<a href="#info">Info</a>
						</li>
						<li className="flex items-center justify-start gap-x-1 group">
							<span className="duration-200 opacity-50 group-hover:opacity-100">#</span>
							<a href="#warning">Warning</a>
						</li>
						<li className="flex items-center justify-start gap-x-1 group">
							<span className="duration-200 opacity-50 group-hover:opacity-100">#</span>
							<a href="#basic">Basic</a>
						</li>
						<li className="flex items-center justify-start gap-x-1 group">
							<span className="duration-200 opacity-50 group-hover:opacity-100">#</span>
							<a href="#confirm">Confirm</a>
						</li>
					</ul>
				</div>

				<div>
					<ItalicText>Example</ItalicText>

					<TypeExample />
				</div>

				{/* <div>
					<div
						className="offset-anchor"
						id="success"
					>
						<Success />
					</div>

					<div
						className="offset-anchor"
						id="error"
					>
						<ItalicText>Toast Type: Error</ItalicText>
					</div>

					<div
						className="offset-anchor"
						id="info"
					>
						<ItalicText>Toast Type: Info</ItalicText>
					</div>

					<div
						className="offset-anchor"
						id="warning"
					>
						<ItalicText>Toast Type: Warning</ItalicText>
					</div>

					<div
						className="offset-anchor"
						id="basic"
					>
						<ItalicText>Toast Type: Basic</ItalicText>
					</div>

					<div
						className="offset-anchor mb-96"
						id="confirm"
					>
						<ItalicText>Toast Type: Confirm</ItalicText>
					</div>
				</div> */}

				<div className="flex justify-between w-full">
					<ToastTypesRoutes />
				</div>
			</div>
		</div>
	);
};

export default ToastTypes;
