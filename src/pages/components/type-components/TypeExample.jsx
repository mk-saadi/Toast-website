import { useToast } from "react-toast-master";
import { useState } from "react";
import HideButton from "../hooks/HideButton";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import CodeBlock from "../hooks/CodeBlock";
import ItalicText from "../hooks/ItalicText";

const toastType = [
	{ type: "success", name: "success", message: "Code compiled successfully." },
	{ type: "error", name: "error", message: "Error at code 143." },
	{ type: "info", name: "info", message: "You have a dentist appointment tomorrow at 9:30 am." },
	{ type: "warning", name: "warning", message: "Couldn't compile code. See error" },
	{ type: "loadingDark", name: "loading", message: "Loading happiness." },
	{ type: "basicDark", name: "basic", message: "Just another Tuesday." },
	{
		type: "confirmDark",
		name: "confirm",
		message: "Are you sure you want to delete your enemies?",
		align: "left",
		innerFooter: "If you delete, it will be 'THE END' for them.",
	},
];

const TypeExample = () => {
	const { toastMaster, hideToast } = useToast();
	const [selected, setSelected] = useState(toastType[0]);

	const types = selected.type;
	const message = selected.message;
	const align = selected.align;
	const footer = selected.innerFooter;

	const codeString = `toastMaster({
    type: "${types}",
    message: "${message}",
    bg: "white",
})`;

	const toastHandler = (e) => {
		e.preventDefault();

		toastMaster({
			type: types,
			message: message,
			transition: "down",
			align: align,
			footer: footer,
		});
	};

	return (
		<div>
			<ItalicText>Example below:</ItalicText>
			<div className="w-full overflow-hidden">
				<CodeBlock
					codeString={codeString}
					language={"jsx"}
				/>

				<RadioGroupComponent
					labelText="Select a toast type."
					radioValue={selected}
					setRadioValue={setSelected}
					options={toastType}
				/>
			</div>

			<p className="mt-4 max-w-prose">
				<small>
					* all toast&apos;s are in their primary color. Different toast colors are explored in the
					next page.
				</small>
			</p>

			<div className="flex flex-col mt-4 gap-x-4 lg:flex-row">
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

export default TypeExample;
