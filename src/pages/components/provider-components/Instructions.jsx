import CodeBlock from "../hooks/CodeBlock";
import Hei2 from "../hooks/Hei2";
import CustomSpan from "../hooks/Highlight";
import ItalicText from "../hooks/ItalicText";

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
const importProvider = `import { ToastProvider } from "react-toast-master";`;

const Instructions = () => {
	return (
		<div>
			<Hei2>Toast Setup Instructions</Hei2>
			<p className="mt-1 mb-8">
				The <CustomSpan>ToastProvider</CustomSpan> component is essential for enabling toast
				notifications in your application.
				<br />
				<br />
				As it uses the <CustomSpan>Context API</CustomSpan>, it must be placed at the top level of
				your component tree to ensure that toasts are accessible from any part of the application.
			</p>
			<ItalicText>
				In the <CustomSpan>main.jsx</CustomSpan> file of your project
			</ItalicText>
			<p>Import the ToastProvider component in main.jsx file</p>
			<CodeBlock
				language={"jsx"}
				codeString={importProvider}
			/>

			<ItalicText classname={"mt-4"}>Example</ItalicText>
			<CodeBlock
				language={"jsx"}
				codeString={codeString}
			/>
		</div>
	);
};

export default Instructions;
