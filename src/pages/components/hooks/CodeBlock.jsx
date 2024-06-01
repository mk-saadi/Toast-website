import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SquareCheck, Copy } from "lucide-react";

const CodeBlock = ({ codeString }) => {
	return (
		<div className="relative group">
			<SyntaxHighlighter
				language="javascript"
				style={oneDark}
				showLineNumbers
				wrapLines
				aria-label="code"
			>
				{codeString}
			</SyntaxHighlighter>
			<CopyButton textToCopy={codeString} />
		</div>
	);
};

const CopyButton = ({ textToCopy }) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 1500);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	return (
		<p className="absolute top-2.5 right-2.5">
			{isCopied ? (
				<SquareCheck
					className="duration-200 opacity-0 group-hover:opacity-100"
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
