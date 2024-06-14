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
	{ border: "none", name: "none" },
	{ border: "sm", name: "sm" },
	{ border: "md", name: "md" },
	{ border: "lg", name: "lg" },
	{ border: "xl", name: "xl" },
	{ border: "twoXl", name: "twoXl" },
	{ border: "full", name: "full" },
];

const Radius = () => {
	const { toastMaster, hideToast } = useToast();
	const [selected, setSelected] = useState(toastBorder[0]);

	const border = selected.border;
	const type = selected.type;

	const codeString = `toastMaster({
	type: "${type}",
	message: "Toast's border radius is '${border}'",
	bg: "white",
	radius: "${border}"
})`;

	const toastHandler = (e) => {
		e.preventDefault();

		toastMaster({
			type: type,
			message: `Toast's border radius is '${border}'`,
			transition: "down",
			bg: "white",
			radius: border,
		});
	};

	return (
		<div id="radius">
			<Hei2 classname={"mb-2"}># Toast Border Radius:</Hei2>
			<p>
				Choose the border radius best suited for your toast. The default is{" "}
				<CustomSpan>lg</CustomSpan>
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

export default Radius;
