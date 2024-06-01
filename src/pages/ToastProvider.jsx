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

const codeString = `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastProvider } from "react-toast-master";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ToastProvider>
			<App />
		</ToastProvider>
	</React.StrictMode>
);`;

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

const importProvider = `import { ToastProvider } from "react-toast-master";`;

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
				<div>
					<Hei2>Toast Usage example</Hei2>
					<h3 className="mt-1 mb-8">
						The <CustomSpan>ToastProvider</CustomSpan> component is essential for enabling toast
						notifications in your application.
						<br />
						<br />
						As it uses the <CustomSpan>Context API</CustomSpan>, it must be placed at the top
						level of your component tree to ensure that toasts are accessible from any part of the
						application.
					</h3>
					<ItalicText>
						In the <CustomSpan>main.jsx</CustomSpan> file of your project
					</ItalicText>
					<p>Import the ToastProvider component in main.jsx file</p>
					<CodeBlock codeString={importProvider} />

					<ItalicText classname={"mt-4"}>Example</ItalicText>
					<CodeBlock codeString={codeString} />
				</div>

				<div>
					<ItalicText>Using the toast in your application</ItalicText>
					<p>
						Import the useToast hook from useToast() and destructure{" "}
						<CustomSpan>toastMaster</CustomSpan> and <CustomSpan>hideToast</CustomSpan>, if you
						want to remove the toast after an action.
					</p>
					<CodeBlock codeString={importUseToast} />

					<ItalicText classname={"mt-4"}>Example</ItalicText>
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
