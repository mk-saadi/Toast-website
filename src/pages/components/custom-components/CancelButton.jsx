import { useToast } from "react-toast-master";
import CodeBlock from "../hooks/CodeBlock";
import Hei2 from "../hooks/Hei2";
import CustomSpan from "../hooks/Highlight";
import ItalicText from "../hooks/ItalicText";
import { useState } from "react";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import Button from "../hooks/Button";

const toastCancel = [
	{ name: "true", value: true },
	{ name: "false", value: false },
];

const CancelButton = () => {
	const { toastMaster, hideToast } = useToast();
	const [selected, setSelected] = useState(toastCancel[0]);

	const codeString = `toastMaster({
	type: "infoStayWhite",
	message: "This is a persistent toast.",
	bg: "gray",
	footer: "You can cancel this toast by clicking on the cancel button. Else this toast won't disappear automatically.",
	cancelButton: ${selected.name},
})`;

	const codeString1 = `const { toastMaster, hideToast } = useToast();`;

	const handleToast = (e) => {
		e.preventDefault();

		toastMaster({
			type: "infoStayWhite",
			message: "This is a persistent toast.",
			bg: "gray",
			transition: "down",
			position: "top",
			cancelButton: selected.value,
			footer: "You can cancel this toast by clicking on the cancel button. Else this toast won't disappear automatically.",
		});
	};

	return (
		<div
			id="cancelButton"
			className=""
		>
			<Hei2 classname={"mb-2"}># Cancel Button and hideToast():</Hei2>
			<p>
				To hide the toast before toast time runs out or to hide <CustomSpan>persistent</CustomSpan>{" "}
				toast types, you can use <CustomSpan>cancelButton</CustomSpan>. &quot;cancelButton&quot; is a
				boolean. By default it&apos;s is set to <CustomSpan>true</CustomSpan>
			</p>
			<ItalicText classname={"mt-2"}>Example below:</ItalicText>
			<CodeBlock
				codeString={codeString}
				language={"jsx"}
			/>

			<form onSubmit={handleToast}>
				{/* toast default */}
				<RadioGroupComponent
					labelText="Toast dismiss button."
					radioValue={selected}
					setRadioValue={setSelected}
					options={toastCancel}
				/>

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

			<div className="mt-4">
				<p>
					You can destructure <CustomSpan>hideToast</CustomSpan> when you import useToast(). You can
					use it to hide the toast after a certain action.
				</p>

				<ItalicText>Destructure hideToast:</ItalicText>
				<CodeBlock
					codeString={codeString1}
					language={"jsx"}
				/>
			</div>
		</div>
	);
};

export default CancelButton;
