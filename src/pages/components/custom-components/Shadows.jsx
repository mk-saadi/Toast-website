import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { useState } from "react";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import CodeBlock from "../hooks/CodeBlock";
import { useToast } from "react-toast-master";

const toastShadows = [
	{ shadow: "none", name: "none", type: "infoDark" },
	{ shadow: "around", name: "around", type: "infoDark" },
	{ shadow: "gray", name: "gray/default", type: "infoDark" },
	{ shadow: "block", name: "block", type: "infoDark" },
	{ shadow: "dark", name: "dark", type: "infoDark" },
	{ shadow: "white", name: "white", type: "infoDark" },
	{ shadow: "success", name: "success", type: "success" },
	{ shadow: "error", name: "error", type: "error" },
	{ shadow: "info", name: "info", type: "info" },
	{ shadow: "warning", name: "warning", type: "warning" },
];

const Shadows = () => {
	const { toastMaster, hideToast } = useToast();
	const [selected, setSelected] = useState(toastShadows[0]);

	const shadow = selected.shadow;
	const type = selected.type;

	const codeString = `toastMaster({
	type: "${type}",
	message: "This toast is using shadow '${shadow}'",
	bg: "white",
	shadow: "${shadow}"
})`;

	const toastHandler = (e) => {
		e.preventDefault();

		toastMaster({
			type: type,
			message: `This toast is using shadow '${shadow}'`,
			transition: "down",
			bg: "white",
			shadow: shadow,
		});
	};

	return (
		<div id="shadow">
			<Hei2 classname={"mb-2"}># Toast Shadows:</Hei2>
			<p>
				You can change the text alignment of the toast. The default is <CustomSpan>center</CustomSpan>
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
					options={toastShadows}
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

export default Shadows;
