import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { useState } from "react";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import CodeBlock from "../hooks/CodeBlock";
import { useToast } from "react-toast-master";

const toastAlign = [
	{ align: "center", name: "Center/Default", message: "Toast text alignment from" },
	{ align: "left", name: "Left", message: "Toast text alignment from" },
	{ align: "right", name: "Right", message: "Toast text alignment from" },
];

const Align = () => {
	const { toastMaster, hideToast } = useToast();
	const [selected, setSelected] = useState(toastAlign[0]);

	const message = selected.message;
	const align = selected.align;

	const codeString = `toastMaster({
	type: "infoWhite",
	message: "${message} '${align}'",
	align: "${align}",
})`;

	const toastHandler = (e) => {
		e.preventDefault();

		toastMaster({
			type: "info",
			message: `${message} '${align}'`,
			transition: "down",
			bg: "dark",
			align: align,
		});
	};

	return (
		<div id="align">
			<Hei2 classname={"mb-2"}># Toast Text Align:</Hei2>

			<p>
				You can change the text alignment of the toast. The default is <CustomSpan>center</CustomSpan>
			</p>
			<ItalicText classname={"mt-2"}>Example below:</ItalicText>

			<CodeBlock
				codeString={codeString}
				language={"jsx"}
			/>

			<form
				onSubmit={toastHandler}
				className="flex flex-col gap-y-4"
			>
				<div className="flex flex-row gap-x-8">
					{/* toast default */}
					<RadioGroupComponent
						labelText="Select toast text alignment."
						radioValue={selected}
						setRadioValue={setSelected}
						options={toastAlign}
					/>
				</div>

				<p className="max-w-prose">
					<small>
						* if the text is invisible try changing the text color. It may have become invisible
						due to the background color.
						<br />
						&quot;basic&quot; and &quot;confirm&quot; doesn&apos;t have &quot;White&quot; as toast
						color. So leave the color to &quot;Default&quot; or &quot;Dark&quot;.
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

export default Align;
