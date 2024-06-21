import { useState } from "react";
import HideButton from "../hooks/HideButton";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
// import CodeBlock from "../hooks/CodeBlock";
import ItalicText from "../hooks/ItalicText";
import CodeBlock from "../hooks/CodeBlock";
import { useToast } from "react-toast-master";

const confirmType = [
	{
		type: "confirmDark",
		name: "confirm",
		message: "Are you sure you want to delete your enemies?",
		align: "left",
		innerFooter: "If you delete, it will be 'THE END' for them.",
	},
];

const Confirm = () => {
	const { toastMaster, hideToast } = useToast();
	const [selected, setSelected] = useState(confirmType[0]);

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
					options={confirmType}
				/>
			</div>

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

export default Confirm;
