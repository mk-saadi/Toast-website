import Hbreads from "./components/hooks/Hbreads";
import Hei2 from "./components/hooks/Hei2";
import useScrollToTop from "./components/hooks/useScrollToTop";
import ToastTypesRoutes from "./components/routes/ToastTypesRoutes";
import ItalicText from "./components/hooks/ItalicText";
import CustomSpan from "./components/hooks/Highlight";
import CodeBlock from "./components/hooks/CodeBlock";
import Button from "./components/hooks/Button";
import TypeExample from "./components/type-components/TypeExample";
import HideButton from "./components/hooks/HideButton";

const ToastTypes = () => {
	useScrollToTop();

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

					<p className="mt-1 mb-8">
						All common toast types are available including &quot;confirm&quot; toast type. Check
						the example below.
					</p>

					<ItalicText>Example below:</ItalicText>
					<TypeExample />
				</div>

				<div className="flex justify-between w-full">
					<ToastTypesRoutes />
				</div>
			</div>
		</div>
	);
};

export default ToastTypes;
