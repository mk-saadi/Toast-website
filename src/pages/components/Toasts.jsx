import { useToast } from "react-toast-master";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `
    <button
        onClick={() =>
            toastMaster({
                type: "warningStay",
                message: "Oops!",
                footer: (
                    <p>
                        Something went wrong. Please try again. If that doesn&apos;t work try
                        again again.
                    </p>
                ),
                align: "left",
                position: "topRight",
                bg: "dark",
                transition: "jelly",
                shadow: "error",

                cancelButton: true,
            })
        }
    >
        hello
    </button>`;

const Toasts = () => {
	const { toastMaster } = useToast();

	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard
			.writeText(codeString)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 3000); // Reset copied state after 2 seconds
				textCopied(); // Call textCopied after successful copy
			})
			.catch((err) => {
				console.error("Failed to copy code:", err);
			});
	};

	const textCopied = () => {
		toastMaster({
			type: "successWhite",
			message: "Copied!",
			bg: "dark",
			position: "topFull",
			radius: "none",
			transition: "down",
		});
	};

	return (
		<div>
			<div className="my-12 ">
				<div className="bg_glass w-[600px]">
					<div className="flex flex-col rounded-2xl ">
						<div className="flex justify-end px-3 text-white bg-gray-800">
							<button
								onClick={handleCopy}
								className={`copy-button ${copied ? "copied" : ""}`}
							>
								{copied ? "Copied!" : "Copy"}
							</button>
						</div>

						<div className="rounded-b-xl">
							<SyntaxHighlighter
								language="javascript"
								style={gruvboxDark}
								showLineNumbers
								wrapLines
								aria-label="code"
							>
								{codeString}
							</SyntaxHighlighter>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Toasts;
