import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useToast } from "react-toast-master";
import Button from "../hooks/Button";
import Hei2 from "../hooks/Hei2";

const codeString = `<button
	onClick={() =>
		toastMaster({
			type: "info",
			message: "Yay! Toast go brrrrr.",
		})
	}
>
	hello
</button>`;

const Hcodes = () => {
	const { toastMaster } = useToast();

	return (
		<>
			<div className="overflow-hidden">
				<Hei2>Simple Example</Hei2>
				<SyntaxHighlighter
					language="javascript"
					style={oneDark}
					showLineNumbers
					wrapLines
					aria-label="code"
				>
					{codeString}
				</SyntaxHighlighter>
			</div>

			<div className="flex justify-end">
				<Button clickAction={() => toastMaster({ type: "info", message: "Yay! Toast go brrrrr." })}>
					Pop the toast!
				</Button>
			</div>
		</>
	);
};

export default Hcodes;
