import { useToast } from "react-toast-master";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "../ThemeProvider";

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

                 ,
            })
        }
    >
        hello
    </button>`;

const Toasts = () => {
	const { theme } = useTheme();
	const { toastMaster } = useToast();

	const toastType = theme === "nord" ? "successDark" : "successWhite";
	const toastBg = theme === "nord" ? "white" : "dark";

	// Function to show toast
	const showToast = () => {
		toastMaster({
			type: toastType,
			message: "Copied!",
			bg: toastBg,
			position: "topFull",
			radius: "none",
			transition: "down",
		});
	};

	return (
		<div>
			<button onClick={showToast}>Show Toast</button>
		</div>
	);
};

export default Toasts;
