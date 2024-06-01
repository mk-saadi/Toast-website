import ToastProviderRoutes from "./components/routes/ToastProviderRoutes";
import useScrollToTop from "./components/hooks/useScrollToTop";
import Hbreads from "./components/hooks/Hbreads";
import Hei2 from "./components/hooks/Hei2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CustomSpan from "./components/hooks/Highlight";
import Button from "./components/hooks/Button";
import { useToast } from "react-toast-master";
import ItalicText from "./components/hooks/ItalicText";
import CodeBlock from "./components/hooks/CodeBlock";
import Instructions from "./components/provider-components/Instructions";

const codeStringApp = `import React from "react";
import "./app.css";
import { useToast } from "react-toast-master";

export default function App() {
	const { toastMaster, hideToast } = useToast();

	const popatoast = () => {
		toastMaster({
			type: "infoWhite",
			message: "toasting toast inside a toastprovider",
			footer: (
				<p>
					truly one of a kind.
					<br /> Hide the toast with{" "}
					<span
						onClick={hideToast}
						className="underline cursor-pointer"
					>
						hideToast
					</span>
					.
				</p>
			),
			bg: "dark",
			cancelButton: true,
		})
	};

	return (
		<button
			onClick={popatoast}
		>
			hello
		</button>
	);
}`;

const importUseToast = `import { UseToast, hideToast } from "react-toast-master";`;

const Toast_Provider = () => {
	const { toastMaster, hideToast } = useToast();
	useScrollToTop();

	const popatoast = () => {
		toastMaster({
			type: "infoWhite",
			message: "toasting toast inside a toastprovider",
			footer: (
				<p>
					truly one of a kind.
					<br /> Hide the toast with{" "}
					<span
						onClick={hideToast}
						className="underline cursor-pointer"
					>
						hideToast
					</span>
					.
				</p>
			),
			bg: "dark",
			cancelButton: true,
		});
	};

	return (
		<div
			className="flex flex-col min-h-screen"
			style={{ color: "var(--text-color-dark-white)" }}
		>
			<Hbreads>Toast Usage</Hbreads>

			<div className="flex flex-col gap-y-14">
				<Instructions />

				<div>
					<ItalicText>Using the toast in your application</ItalicText>
					<p>
						Import the useToast hook from useToast() and destructure{" "}
						<CustomSpan>toastMaster</CustomSpan> and <CustomSpan>hideToast</CustomSpan>, if you
						want to remove the toast after an action.
					</p>
					<CodeBlock codeString={importUseToast} />

					<ItalicText classname={"mt-4"}>Example</ItalicText>
					<p>
						Using <CustomSpan>TailwindCSS</CustomSpan> for styling footer. You may use custom css.
					</p>
					<CodeBlock codeString={codeStringApp} />
					<div className="flex justify-end">
						<Button clickAction={popatoast}>Pop the toast!</Button>
					</div>
				</div>

				<div className="flex justify-between w-full">
					<ToastProviderRoutes />
				</div>
			</div>
		</div>
	);
};

export default Toast_Provider;
