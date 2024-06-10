import { useToast } from "react-toast-master";
import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { useState } from "react";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";
import CodeBlock from "../hooks/CodeBlock";

const toastPG = [
	{ name: "top", message: "Toast from " },
	{ name: "topLeft", message: "Toast from " },
	{ name: "topRight", message: "Toast from " },
	{ name: "bottom", message: "Toast from " },
	{ name: "bottomLeft", message: "Toast from " },
	{ name: "bottomRight", message: "Toast from " },
	{ name: "center", message: "Toast from " },
];

const Position = () => {
	const { toastMaster, hideToast } = useToast();
	const [selectedPG, setSelectedPG] = useState(toastPG[0]);

	const pg = selectedPG.name;
	const message = selectedPG.message;

	const codeString = `toastMaster({
  type: "info",
  position: "${pg}",
  message: "${message}'${pg}'",
})`;

	const handlePG = (e) => {
		e.preventDefault();

		toastMaster({
			type: "info",
			message: `${message}"${pg}"`,
			position: pg,
			bg: "white",
			cancelButton: true,
			transition: "zoom",
		});
	};

	return (
		<div id="position">
			<Hei2># Toast Position</Hei2>
			<p>
				Select the best toast <CustomSpan>position</CustomSpan> that suits your needs.
			</p>
			<ItalicText classname={"mt-2 -mb-2"}>Example below:</ItalicText>

			<CodeBlock
				codeString={codeString}
				language={"jsx"}
			/>

			<form
				onSubmit={handlePG}
				className="flex flex-col mt-2 gap-y-4"
			>
				<div className="flex flex-row gap-x-8">
					{/* toast position */}
					<RadioGroupComponent
						labelText="Select a toast position."
						radioValue={selectedPG}
						setRadioValue={setSelectedPG}
						options={toastPG}
					/>
				</div>

				{/* <p className="max-w-prose">
					<small>
						* if the text is invisible try changing the text color. It may have become invisible
						due to the background color.
					</small>
				</p> */}

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

export default Position;
