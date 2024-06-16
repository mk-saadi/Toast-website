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

const Extra = () => {
	const theme = useTheme();
	const { toastMaster } = useToast();

	const showToast = () => {
		let toastType, toastBg, radius, message;

		if (theme === "nord") {
			toastType = "basic";
			toastBg = "dark";
			radius = "md";
			message = "Quote from the abyss.";
		} else if (theme === "sunset") {
			toastType = "infoWhite";
			toastBg = "gray";
			radius = "sm";
			message = "Positive quote";
		}

		toastMaster({
			type: toastType,
			message: message,
			bg: toastBg,
			radius: radius,
			transition: "down",
			footer: "Hello darkness my old friend",
		});
	};

	return (
		<div id="extra">
			<Hei2 classname={"mb-2"}># Extra ( changing toast property based on theme ):</Hei2>{" "}
			<div>
				<button onClick={showToast}>Show Toast</button>
			</div>
		</div>
	);
};

export default Extra;
