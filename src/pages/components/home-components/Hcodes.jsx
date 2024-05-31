import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useToast } from "react-toast-master";
import useTheme from "../useTheme";

const codeStringWhite = `<button
	onClick={() =>
		toastMaster({
			type: "info",
			message: "Yay! Toast go brrrrr.",
		})
	}
>
	hello
</button>`;

const codeStringDark = `<button
	onClick={() =>
		toastMaster({
			type: "info",
			message: "Yay! Toast go brrrrr.",
            bg: "dark",
		})
	}
>
	hello
</button>`;

const Hcodes = () => {
	const { toastMaster } = useToast();
	const { theme } = useTheme();

	const codeString = theme === "sunset" || theme === "nord" ? codeStringDark : codeStringWhite;

	return (
		<>
			<div className="overflow-hidden">
				<h3
					className="text-2xl font-semibold uppercase"
					style={{
						color: "var(--text-color-dark-white)",
					}}
				>
					Simple Example
				</h3>
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
				<button
					style={{ color: "var(--text-white)", borderRadius: "var(--borderRadius)" }}
					className="w-fit px-6 py-2.5 mt-2 duration-200 rounded-none bg-primary active:scale-[.98]"
					onClick={() =>
						toastMaster({
							type: "info",
							message: "Yay! Toast go brrrrr.",
						})
					}
				>
					Pop the toast!
				</button>
			</div>
		</>
	);
};

export default Hcodes;
