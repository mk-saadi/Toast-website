import { useToast } from "react-toast-master";
import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { useState } from "react";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import CodeBlock from "../hooks/CodeBlock";

const toastTR = [
	{ name: "top", message: "Toast transition ", position: "bottom" },
	{ name: "down", message: "Toast transition ", position: "top" },
	{ name: "left", message: "Toast transition ", position: "topLeft" },
	{ name: "right", message: "Toast transition ", position: "topRight" },
	{ name: "jelly", message: "Toast transition ", position: "top" },
	{ name: "zoom", message: "Toast transition ", position: "top" },
	{ name: "fade", message: "Toast transition ", position: "top" },
];

const Transition = () => {
	const { toastMaster, hideToast } = useToast();
	const [selectedTR, setSelectedTR] = useState(toastTR[0]);

	const tr = selectedTR.name;
	const message = selectedTR.message;
	const position = selectedTR.position;

	const codeString = `toastMaster({
  type: "info",
  message: "${message}'${tr}' from position '${position}'",
  transition: "${tr}",
  position: "${position}",
})`;

	const handleTR = (e) => {
		e.preventDefault();

		toastMaster({
			type: "info",
			message: `${message}'${tr}' from position '${position}'`,
			bg: "white",
			transition: tr,
			position: position,
		});
	};

	return (
		<div id="transition">
			<Hei2 classname={"mb-2"}># Toast Transition/Animation:</Hei2>
			<p>
				Select the toast transition or animation best suited for your project. The default is{" "}
				<CustomSpan>zoom</CustomSpan>
			</p>
			<ItalicText classname={"mt-2 -mb-2"}>Example below:</ItalicText>

			<CodeBlock
				codeString={codeString}
				language={"jsx"}
			/>

			<form
				onSubmit={handleTR}
				className="flex flex-col mt-2 gap-y-4"
			>
				<div className="flex flex-row gap-x-8">
					{/* toast transition */}
					<RadioGroupComponent
						labelText="Select toast transition/animation."
						radioValue={selectedTR}
						setRadioValue={setSelectedTR}
						options={toastTR}
					/>
				</div>

				<p className="max-w-prose">
					<small>
						* you have to tweak the toast transition based on your toast position. Certain
						transitions might not be suited for all toast positions.
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

export default Transition;
