import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { useState } from "react";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import CodeBlock from "../hooks/CodeBlock";
import { useToast } from "react-toast-master";
import { useTheme } from "../../ThemeProvider";

const codeString = `const theme = useTheme();`;

const codeStringChange = `let toastType, toastBg, radius, message;

if (theme === "sunset") {
	toastType = "basic";
	toastBg = "dark";
	message = "Quote from the abyss.";
	footer = "Hello darkness my old friend";
} else if (theme === "nord") {
	toastType = "infoWhite";
	toastBg = "gray";
	message = "Positive quote";
	footer = "Stay positive. Better days are on the way."
}`;

const codeString2 = `	toastMaster({
		type: toastType,
		message: message,
		bg: toastBg,
		transition: "down",
		footer: footer,
	});`;

const Extra = () => {
	const theme = useTheme();
	const { toastMaster, hideToast } = useToast();

	const showToast = () => {
		let toastType, toastBg, message, footer;

		if (theme === "nord") {
			toastType = "basic";
			toastBg = "dark";
			message = "Quote from the abyss.";
			footer = "Hello darkness my old friend";
		} else if (theme === "sunset") {
			toastType = "infoWhite";
			toastBg = "gray";
			message = "Positive quote";
			footer = "Stay positive. Better days are on the way.";
		}

		toastMaster({
			type: toastType,
			message: message,
			bg: toastBg,
			transition: "down",
			footer: footer,
		});
	};

	return (
		<div id="extra">
			<Hei2 classname={"mb-2"}># Extra ( changing toast property based on theme ):</Hei2>{" "}
			<p>You can change the toast property based on the theme of your website.</p>
			<div>
				<ItalicText>See below example:</ItalicText>
				<CodeBlock
					codeString={codeString}
					language={"jsx"}
				/>
				<p>
					First get the theme. In this case we are importing the theme which we setup using context
					api. Next define the changes based on the theme. In this example we are using theme
					provided by dasisyui.
				</p>
				<CodeBlock
					codeString={codeStringChange}
					language={"jsx"}
				/>
				<p>Lastly using the toastMaster function we are changing the toast properties.</p>
				<CodeBlock
					codeString={codeString2}
					language={"jsx"}
				/>
			</div>
			<div className="flex flex-col gap-x-4 lg:flex-row">
				<Button
					classname={"w-full"}
					type={"submit"}
					clickAction={showToast}
				>
					Pop
				</Button>
				<HideButton
					clickAction={hideToast}
					classname={"w-full"}
				>
					Hide
				</HideButton>
			</div>
		</div>
	);
};

export default Extra;
