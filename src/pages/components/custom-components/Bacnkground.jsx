import { useState } from "react";
import ItalicText from "../hooks/ItalicText";
import { useToast } from "react-toast-master";
import Hei2 from "../hooks/Hei2";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import CustomSpan from "../hooks/Highlight";
import CodeBlock from "../hooks/CodeBlock";

const toastBG = [
	{ bg: "white", name: "White/default", message: "Hello World!" },
	{ bg: "dark", name: "Dark", message: "Hello World!" },
	{ bg: "gray", name: "Gray", message: "Hello World!" },
	{ bg: "success", name: "Success", message: "Hello World!" },
	{ bg: "error", name: "Error", message: "Hello World!" },
	{ bg: "info", name: "Info", message: "Hello World!" },
	{ bg: "warning", name: "Warning", message: "Hello World!" },
	{ bg: "glass", name: "Glass", message: "Hello World!" },
	{
		bg: "transparent",
		name: "Transparent",
		message: "H e l l o W o r l d !",
	},
];

const toastColor = [
	{ color: "", name: "Default" },
	{ color: "White", name: "White" },
	{ color: "Dark", name: "Dark" },
];

const Background = () => {
	const { toastMaster, hideToast } = useToast();

	const [selectedBG, setSelectedBG] = useState(toastBG[0]);

	const bg = selectedBG.bg;
	const message = selectedBG.message;
	const tType = selectedBG.bg === "white" ? "info" : "info";
	const [selectedColor, setSelectedColor] = useState(toastColor[0]);
	const color = selectedColor.color;

	const codeString = `toastMaster({
	type: "${tType + color}",
	message: "${message}",
	bg: "${bg}",
})`;

	const handleBG = (e) => {
		e.preventDefault();

		toastMaster({
			type: tType + color,
			message: message,
			cancelButton: true,
			transition: "down",
			bg: bg,
		});
	};

	return (
		<div id="backgroundColor">
			<Hei2 classname={"mb-2"}># Toast Background:</Hei2>
			<p>
				You can use different background color best suited for your toast. If you don't define any
				background color for your toast it will take <CustomSpan>"white"</CustomSpan> as it's default
				background color.
			</p>
			<ItalicText classname={"mt-2 -mb-2"}>Example below:</ItalicText>

			<CodeBlock
				codeString={codeString}
				language={"jsx"}
			/>

			<form
				onSubmit={handleBG}
				className="flex flex-col mt-2 gap-y-4"
			>
				<div className="flex flex-row gap-x-8">
					{/* toast background color */}
					<RadioGroupComponent
						labelText="Select toast background Color."
						radioValue={selectedBG}
						setRadioValue={setSelectedBG}
						options={toastBG}
					/>

					{/* toast color */}
					<RadioGroupComponent
						labelText="Select a toast Color."
						radioValue={selectedColor}
						setRadioValue={setSelectedColor}
						options={toastColor}
					/>
				</div>

				<p className="max-w-prose">
					<small>
						* if the text is invisible try changing the text color. It may have become invisible
						due to the background color.
					</small>
				</p>

				<div className="flex flex-col gap-x-4 lg:flex-row">
					<Button
						classname={"w-full"}
						type={"submit"}
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
			</form>
		</div>
	);
};

export default Background;
