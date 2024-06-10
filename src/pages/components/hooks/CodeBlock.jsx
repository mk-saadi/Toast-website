import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SquareCheck, Copy } from "lucide-react";
import { useTheme } from "../../ThemeProvider";
import { useToast } from "react-toast-master";

const CodeBlock = ({ codeString, language }) => {
	const theme = useTheme();
	const codeTheme = theme === "sunset" ? oneLight : oneDark;

	return (
		<div className="relative group">
			<SyntaxHighlighter
				language={language}
				style={codeTheme}
				showLineNumbers={true}
				aria-label="code"
			>
				{codeString}
			</SyntaxHighlighter>
			<CopyButton
				theme={theme}
				textToCopy={codeString}
			/>
		</div>
	);
};

const CopyButton = ({ textToCopy, theme }) => {
	const [isCopied, setIsCopied] = useState(false);
	const { toastMaster } = useToast();

	let toastTypeSuccess, toastBgSuccess, radiusSuccess;
	let toastTypeError, toastBgError, radiusError;

	if (theme === "nord") {
		toastTypeSuccess = "successWhite";
		toastBgSuccess = "glass";
		radiusSuccess = "md";
	} else if (theme === "sunset") {
		toastTypeSuccess = "successDark";
		toastBgSuccess = "glass";
		radiusSuccess = "sm";
	}

	if (theme === "nord") {
		toastTypeError = "errorWhite";
		toastBgError = "glass";
		radiusError = "md";
	} else if (theme === "sunset") {
		toastTypeError = "errorDark";
		toastBgError = "glass";
		radiusError = "sm";
	}

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setIsCopied(true);
			toastMaster({
				type: toastTypeSuccess,
				message: "Copied!",
				bg: toastBgSuccess,
				radius: radiusSuccess,
				transition: "top",
				cancelButton: true,
				position: "bottomLeft",
				align: "left",
			});
			setTimeout(() => setIsCopied(false), 1500);
		} catch (err) {
			toastMaster({
				type: toastTypeError,
				message: "Failed to copy",
				bg: toastBgError,
				radius: radiusError,
				transition: "top",
				cancelButton: true,
				position: "bottomLeft",
				align: "left",
			});
		}
	};

	return (
		<p
			className="absolute top-2.5 right-2.5"
			style={{ color: "var(--text-color-dark-white)" }}
		>
			{isCopied ? (
				<SquareCheck
					className="duration-200 opacity-0 cursor-default group-hover:opacity-100"
					size={22}
				/>
			) : (
				<Copy
					className="duration-200 opacity-0 cursor-pointer group-hover:opacity-100"
					size={22}
					onClick={handleCopy}
				/>
			)}
		</p>
	);
};

export default CodeBlock;
