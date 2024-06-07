import React from "react";
import CustomSpan from "../hooks/Highlight";
import CodeBlock from "../hooks/CodeBlock";
import ItalicText from "../hooks/ItalicText";
import Button from "../hooks/Button";
import { useToast } from "react-toast-master";

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
					<br />Hide the toast with{" "}
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
			align: "left",
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

const importUseToast = `import { UseToast } from "react-toast-master";`;

const Usage = () => {
	const { toastMaster, hideToast } = useToast();

	const popatoast = () => {
		toastMaster({
			type: "infoWhite",
			message: "toasting toast inside a toastprovider",
			footer: (
				<p>
					truly one of a kind.
					<br />
					Hide the toast with{" "}
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
			align: "left",
		});
	};

	return (
		<div>
			<ItalicText>Using the toast in your application</ItalicText>
			<p>
				Import the useToast() hook from "react-toast-master" and destructure{" "}
				<CustomSpan>toastMaster</CustomSpan> and <CustomSpan>hideToast</CustomSpan>, if you want to
				remove the toast after an action.
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
	);
};

export default Usage;
