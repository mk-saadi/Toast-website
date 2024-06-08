import { useToast } from "react-toast-master";
import ItalicText from "../hooks/ItalicText";
import CustomSpan from "../hooks/Highlight";
import Hei2 from "../hooks/Hei2";
import { useState } from "react";
import Button from "../hooks/Button";
import RadioGroupComponent from "../hooks/RadioComponent";
import HideButton from "../hooks/HideButton";

const toastType = [
	{ name: "success", message: "Code compiled successfully." },
	{ name: "error", message: "Error at code 143." },
	{ name: "info", message: "You have a dentist appointment tomorrow at 9:30 am." },
	{ name: "warning", message: "Couldn't compile code. See error" },
	{ name: "loading", message: "Loading happiness." },
	{ name: "basic", message: "Just another Tuesday." },
	{
		name: "confirm",
		message: "Are you sure you want to delete your enemies?",
		align: "left",
	},
];

const toastColor = [
	{ color: "", name: "Default" },
	{ color: "White", name: "White" },
	{ color: "Dark", name: "Dark" },
];

const ToastColor = () => {
	const { toastMaster, hideToast } = useToast();

	const [selected, setSelected] = useState(toastType[0]);
	const [selectedColor, setSelectedColor] = useState(toastColor[0]);

	const types = selected.name;
	const message = selected.message;
	const color = selectedColor.color;

	const toastHandler = (e) => {
		e.preventDefault();

		toastMaster({
			type: types + color,
			message: message,
			cancelButton: true,
			transition: "down",
			bg: "glass",
		});
	};

	return (
		<div
			id="toastColor"
			className="space-y-4"
		>
			<Hei2 classname={"mb-2"}># Toast Types/colors:</Hei2>
			<p>
				Every toast has <CustomSpan>three</CustomSpan>(some two) different colors eg. primary, a white
				and a dark version.
			</p>

			<ItalicText>Example below:</ItalicText>
			<form
				onSubmit={toastHandler}
				className="flex flex-col gap-y-4"
			>
				<div className="flex flex-row gap-x-8">
					{/* toast default */}
					<RadioGroupComponent
						labelText="Select a toast Type."
						radioValue={selected}
						setRadioValue={setSelected}
						options={toastType}
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
						<br />
						"basic" and "confirm" doesn't have "White" as toast color. So leave the color to
						"Default" or "Dark".
					</small>
				</p>

				<div className="flex flex-col gap-4 lg:flex-row">
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

			<div>
				<p>
					Toast type "basic" and "confirm" by default have <CustomSpan>white</CustomSpan> color as
					their value since by default their text color is white. <br />
					So no need to put <CustomSpan>"basicWhite"</CustomSpan> or{" "}
					<CustomSpan>"confirmWhite"</CustomSpan> in the "type" key of toastMaster()
				</p>
			</div>
		</div>
	);
};

export default ToastColor;
