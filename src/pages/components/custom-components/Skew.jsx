import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { useState } from "react";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import CodeBlock from "../hooks/CodeBlock";
import { useToast } from "react-toast-master";

const toastBorder = [
	{ skew: "none", name: "none" },
	{ skew: "three", name: "three" },
	{ skew: "six", name: "six" },
	{ skew: "twelve", name: "twelve" },
];

const Skew = () => {
	const { toastMaster, hideToast } = useToast();
	const [selected, setSelected] = useState(toastBorder[2]);

	const skew = selected.skew;

	const codeString = `toastMaster({
	type: "errorWhite",
	message: "Special property skew.",
	bg: "dark",
	skew: "${skew}",
  shadow: "dark",
  footer: "Toast's skew value is '${skew}'"
})`;

	const toastHandler = (e) => {
		e.preventDefault();

		toastMaster({
			type: "errorWhite",
			message: "Special property skew.",
			transition: "down",
			bg: "dark",
			skew: skew,
			radius: "none",
			shadow: "dark",
			footer: `Toast's skew value is "${skew}"`,
		});
	};

	return (
		<div id="skew">
			<Hei2 classname={"mb-2"}># Toast Skew:</Hei2>
			<p>
				Special property skew. Choose the skew value best suited for your toast. The default is{" "}
				<CustomSpan>none</CustomSpan>
			</p>
			<ItalicText classname={"mt-2"}>Example below:</ItalicText>

			<div>
				<CodeBlock
					codeString={codeString}
					language={"jsx"}
				/>

				<RadioGroupComponent
					labelText="Select toast shadow."
					radioValue={selected}
					setRadioValue={setSelected}
					options={toastBorder}
				/>
			</div>

			<p className="max-w-prose">
				<small>
					* if you don&apos;t want your toast to have a skew value then don&apos;t define it.
				</small>
			</p>

			<div className="flex flex-col gap-x-4 lg:flex-row">
				<Button
					classname={"w-full"}
					type={"submit"}
					clickAction={toastHandler}
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

export default Skew;
